import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category: string;
  author: string;
  created_at: string;
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryOptions = [
    { value: "Email Marketing", label: t("blog.categories.emailMarketing") },
    { value: "Sales Outreach", label: t("blog.categories.salesOutreach") },
    { value: "CRM Tips", label: t("blog.categories.crmTips") },
    { value: "MENA Business", label: t("blog.categories.menaBusiness") },
    { value: "Product Updates", label: t("blog.categories.productUpdates") },
    { value: "Case Studies", label: t("blog.categories.caseStudies") },
  ];

  const categoryLabels = Object.fromEntries(categoryOptions.map((option) => [option.value, option.label])) as Record<string, string>;

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, category, author, created_at")
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) setPosts(data);
      });
  }, []);

  const filtered = posts
    .filter((post) => activeCategory === "All" || post.category === activeCategory)
    .filter((post) => !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">{t("blog.title")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 mb-8">{t("blog.subtitle")}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-[600px] mx-auto relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 font-body text-[16px] text-secondary focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
              />
            </motion.div>
          </div>
        </section>
        <section className="py-6 border-b border-border bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-3">
            <button onClick={() => setActiveCategory("All")} className={`font-body text-[14px] font-medium px-4 py-2 rounded-full ${activeCategory === "All" ? "bg-primary text-white" : "border border-border text-secondary hover:bg-muted"} transition-colors`}>{t("blog.all")}</button>
            {categoryOptions.map((category) => (
              <button key={category.value} onClick={() => setActiveCategory(category.value)} className={`font-body text-[14px] font-medium px-4 py-2 rounded-full ${activeCategory === category.value ? "bg-primary text-white" : "border border-border text-secondary hover:bg-muted"} transition-colors`}>{category.label}</button>
            ))}
          </div>
        </section>
        <section className="section-padding bg-muted pb-20">
          <div className="max-w-[1200px] mx-auto">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-16 font-body text-[16px]">{t("blog.noPostsYet")}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {filtered.map((post, i) => (
                  <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl border border-border overflow-visible hover:-translate-y-1 transition-transform duration-200 flex flex-col">
                    <div className="h-[200px] bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-[48px] text-primary/20">{post.title[0]}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="font-body text-[12px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary w-fit">{categoryLabels[post.category] ?? post.category}</span>
                      <h2 className="font-heading text-[18px] md:text-[20px] text-secondary mt-3 mb-2 leading-tight">{post.title}</h2>
                      <p className="font-body text-[14px] text-muted-foreground leading-[1.6] mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <p className="font-body text-[13px] text-secondary">{post.author}</p>
                          <p className="font-body text-[12px] text-muted-foreground">{new Date(post.created_at).toLocaleDateString(i18n.language)}</p>
                        </div>
                        <a href={`/blog/${post.slug}`} className="font-body text-[14px] font-medium text-primary hover:underline flex items-center gap-1">{t("blog.readMore")} <ArrowRight size={14} /></a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
