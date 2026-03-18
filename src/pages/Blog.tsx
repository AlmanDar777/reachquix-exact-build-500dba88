import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["Email Marketing", "Sales Outreach", "CRM Tips", "MENA Business", "Product Updates", "Case Studies"];

const posts = [
  {
    title: "How to Write Cold Emails That Actually Get Replies in 2026",
    category: "Email Marketing",
    excerpt: "Cold email is not dead — but bad cold email is. Learn the exact framework top-performing sales teams use to get 30%+ reply rates in 2026.",
    author: "Moaz Ahmed",
    date: "March 15, 2026",
    readTime: "8 min read",
    slug: "cold-emails-that-get-replies-2026",
  },
  {
    title: "Why UAE Businesses Are Switching from Instantly to Reachquix",
    category: "Sales Outreach",
    excerpt: "Businesses in the Gulf need tools built for their market. Here is why hundreds of UAE companies are making the switch to Reachquix.",
    author: "Moaz Ahmed",
    date: "March 10, 2026",
    readTime: "6 min read",
    slug: "uae-switching-instantly-to-reachquix",
  },
  {
    title: "The Complete Guide to Email Outreach for Dubai Real Estate Agents",
    category: "MENA Business",
    excerpt: "Dubai real estate moves fast. Learn how top agents use automated email outreach to fill their pipeline with qualified leads every single week.",
    author: "Moaz Ahmed",
    date: "March 5, 2026",
    readTime: "10 min read",
    slug: "email-outreach-dubai-real-estate",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">
              Blog
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85">
              Insights, tips, and strategies for sales outreach.
            </motion.p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-border bg-white">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-3">
            <button className="font-body text-[14px] font-medium px-4 py-2 rounded-full bg-primary text-white">All</button>
            {categories.map((c) => (
              <button key={c} className="font-body text-[14px] font-medium px-4 py-2 rounded-full border border-border text-secondary hover:bg-muted transition-colors">
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:-translate-y-1 transition-transform duration-200"
                >
                  {/* Featured image placeholder */}
                  <div className="h-[200px] bg-primary/5 flex items-center justify-center">
                    <span className="font-heading text-[48px] text-primary/20">{post.title[0]}</span>
                  </div>
                  <div className="p-6">
                    <span className="font-body text-[12px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{post.category}</span>
                    <h2 className="font-heading text-[18px] md:text-[20px] text-secondary mt-3 mb-2 leading-tight">{post.title}</h2>
                    <p className="font-body text-[14px] text-muted-foreground leading-[1.6] mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-body text-[13px] text-secondary">{post.author}</p>
                        <p className="font-body text-[12px] text-muted-foreground">{post.date} · {post.readTime}</p>
                      </div>
                      <a href={`/blog/${post.slug}`} className="font-body text-[14px] font-medium text-primary hover:underline flex items-center gap-1">
                        Read More <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
