import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PlayCircle, Mail, Users, CreditCard, Link as LinkIcon, Settings, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { icon: PlayCircle, title: "Getting Started", desc: "Set up your account, connect Google Sheets, and launch your first campaign." },
  { icon: Mail, title: "Email Campaigns", desc: "Build sequences, set timing, personalize emails, and manage templates." },
  { icon: Users, title: "CRM & Pipeline", desc: "Manage leads, track deals, set tasks, and collaborate with your team." },
  { icon: CreditCard, title: "Billing & Plans", desc: "Upgrade, downgrade, payment methods, invoices, and refunds." },
  { icon: LinkIcon, title: "Integrations", desc: "Connect Google Sheets, SMTP servers, and other tools." },
  { icon: Settings, title: "Troubleshooting", desc: "Fix common issues with sending, tracking, and account access." },
];

const articles = [
  { title: "How to connect your Google Sheet to Reachquix", category: "Getting Started", time: "5 min read" },
  { title: "Setting up your SMTP server", category: "Integrations", time: "5 min read" },
  { title: "How to create your first email campaign", category: "Email Campaigns", time: "5 min read" },
  { title: "Understanding reply detection and auto-pause", category: "Email Campaigns", time: "5 min read" },
  { title: "How to use the AI email writer", category: "Email Campaigns", time: "5 min read" },
  { title: "Managing your CRM pipeline", category: "CRM & Pipeline", time: "5 min read" },
  { title: "How to upgrade or cancel your plan", category: "Billing & Plans", time: "5 min read" },
  { title: "GDPR compliance and data privacy", category: "Troubleshooting", time: "5 min read" },
];

const HelpCenter = () => {
  const [search, setSearch] = useState("");
  const filteredArticles = articles.filter((a) => !search || a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">How can we help you?</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 mb-8">Find answers, guides, and everything you need to get started with Reachquix.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-[600px] mx-auto relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for help..." className="w-full h-[52px] rounded-xl bg-white pl-12 pr-4 font-body text-[16px] text-secondary focus:outline-none focus:ring-2 focus:ring-white/50 border-0" />
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border p-6 hover:border-primary transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <cat.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-2">{cat.title}</h3>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{cat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[34px] text-secondary text-center mb-12">Popular Articles</h2>
            <div className="space-y-3">
              {filteredArticles.map((article, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl border border-border p-5 flex items-center justify-between hover:border-primary transition-colors cursor-pointer group">
                  <div className="flex-1">
                    <h3 className="font-body text-[15px] font-medium text-primary group-hover:underline">{article.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-body text-[12px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{article.category}</span>
                      <span className="font-body text-[12px] text-muted-foreground">{article.time}</span>
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[600px] mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-xl p-8 border border-border">
              <h2 className="font-heading text-[22px] md:text-[28px] text-secondary mb-4">Still need help?</h2>
              <p className="font-body text-[15px] text-muted-foreground mb-6">Our team is here to help you get the most out of Reachquix.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => { const evaChatBtn = document.querySelector('[aria-label="Chat with Eva"]') as HTMLButtonElement; evaChatBtn?.click(); }} className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-center cursor-pointer">Chat with Eva →</button>
                <a href="mailto:support@reachquix.com" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-border text-secondary hover:bg-muted transition-colors text-center">Email support@reachquix.com</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
