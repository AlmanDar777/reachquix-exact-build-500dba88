import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  category: string;
  author: string;
  created_at: string;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  featured_image: string | null;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = post.meta_title || post.title + " — Reachquix Blog";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", post.meta_description || post.excerpt || "");
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-[72px] flex-1 flex items-center justify-center">
          <p className="font-body text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-[72px] flex-1 flex flex-col items-center justify-center gap-4">
          <h1 className="font-heading text-[32px] text-secondary">Post not found</h1>
          <Link to="/blog" className="font-body text-primary hover:underline">← Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const publishDate = post.published_at || post.created_at;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto">
            <Link to="/blog" className="font-body text-[14px] text-white/70 hover:text-white flex items-center gap-2 mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="font-body text-[12px] font-medium px-3 py-1 rounded-full bg-white/10 text-white/90">{post.category}</span>
              <h1 className="font-heading text-[28px] md:text-[42px] text-white mt-4 mb-4 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>{post.title}</h1>
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-body text-[14px]">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span className="font-body text-[14px]">{new Date(publishDate).toLocaleDateString(i18n.language, { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="section-padding bg-white">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-[800px] mx-auto prose prose-lg prose-headings:font-heading prose-headings:text-secondary prose-p:font-body prose-p:text-muted-foreground prose-p:leading-[1.8] prose-a:text-primary">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </motion.article>
        </section>
        <section className="py-12 bg-muted">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <h3 className="font-heading text-[22px] text-secondary mb-4">Want results like these?</h3>
            <a href="/signup" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors inline-block">Start Free Today →</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
