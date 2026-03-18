import { motion } from "framer-motion";
import { Zap, Eye, Server, Sparkles, UserCheck, ShieldCheck, Contact, Kanban, Bell, BarChart3, UsersRound, Database, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const emailFeatures = [
  { icon: Zap, title: "Smart Multi-Step Sequences", desc: "Send up to 10 perfectly timed follow-up emails to every contact. Each email only sends if the contact has not replied yet." },
  { icon: Eye, title: "Instant Reply Detection", desc: "Reachquix monitors your inbox every 15 minutes. The moment a contact replies, their sequence stops immediately." },
  { icon: Server, title: "Your Own Mail Server", desc: "Use your own private SMTP — Namecheap, cPanel, or any provider. Keep domain reputation strong." },
  { icon: Sparkles, title: "AI-Powered Email Writer", desc: "Our built-in AI writes proven, high-converting cold email sequences for your specific industry in seconds." },
  { icon: UserCheck, title: "Deep Personalization at Scale", desc: "Insert {{FirstName}}, {{Company}}, {{City}} and custom variables automatically. Mass outreach that feels personal." },
  { icon: ShieldCheck, title: "Smart Bounce & Unsubscribe Handling", desc: "Bounced addresses removed automatically. One-click unsubscribe link included. Stay compliant." },
];

const crmFeatures = [
  { icon: Contact, title: "Complete Contact Management", desc: "Every lead in one place. See complete history — emails sent, replies received, notes added, calls logged." },
  { icon: Kanban, title: "Visual Drag-and-Drop Pipeline", desc: "See your entire funnel at a glance. Drag deals from New Lead to Closed." },
  { icon: Bell, title: "Tasks & Smart Reminders", desc: "Never forget a follow-up. Set tasks, schedule reminders, get notified when it is time to reach out." },
  { icon: BarChart3, title: "Client Reporting Dashboard", desc: "Real-time reports: emails sent, open rates, reply rates, deals closed, revenue generated." },
  { icon: UsersRound, title: "Team Collaboration", desc: "Add team members, assign leads, leave notes. Everyone stays aligned." },
  { icon: Database, title: "Zero Manual Data Entry", desc: "Contacts appear in your CRM automatically with full email thread attached." },
];

const integrations = [
  { name: "Google Sheets", status: "Available" },
  { name: "Namecheap SMTP", status: "Available" },
  { name: "Amazon SES", status: "Available" },
  { name: "Brevo", status: "Available" },
  { name: "Gmail", status: "Available" },
  { name: "Outlook", status: "Available" },
  { name: "WhatsApp", status: "Coming Soon" },
  { name: "Zapier", status: "Coming Soon" },
];

const allFeatures = [
  "Multi-step email sequences", "Reply detection & auto-pause", "Google Sheets live sync",
  "Built-in CRM with pipeline", "AI email writer", "Arabic language support",
  "Bounce handling", "Unsubscribe management", "Team collaboration",
  "Client reporting", "Custom variables", "Real estate templates",
];

const FeatureGrid = ({ title, features }: { title: string; features: typeof emailFeatures }) => (
  <div className="mb-20">
    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary text-center mb-12">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="bg-white rounded-xl p-6 border border-border hover:-translate-y-1 hover:border-primary transition-all duration-200"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/5">
            <f.icon size={24} className="text-primary" />
          </div>
          <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-3">{f.title}</h3>
          <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="section-label mb-4 text-white/80">FEATURES</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[32px] md:text-[48px] leading-[1.2] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
              Every feature you need to close more deals.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[700px] mx-auto">
              Reachquix gives your sales team the complete toolkit — email automation, CRM, Google Sheets sync, AI writing, and more — all in one platform.
            </motion.p>
          </div>
        </section>

        {/* Feature sections */}
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <FeatureGrid title="Email Automation Features" features={emailFeatures} />
            <FeatureGrid title="CRM Features" features={crmFeatures} />

            {/* Integrations */}
            <div className="mb-20">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary text-center mb-12">Integrations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {integrations.map((int, i) => (
                  <motion.div
                    key={int.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-xl p-4 border border-border flex items-center justify-between"
                  >
                    <span className="font-body text-[15px] text-secondary">{int.name}</span>
                    <span className={`font-body text-[12px] font-medium px-2 py-0.5 rounded-full ${int.status === "Available" ? "bg-primary/10 text-primary" : "bg-orange-100 text-orange-700"}`}>
                      {int.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Everything included */}
            <div className="text-center mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-8">Everything Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] mx-auto">
                {allFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-left">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="font-body text-[15px] text-secondary">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Start your free trial today.</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/signup" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-center">
                  Get Started Free →
                </a>
                <a href="/pricing" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary/5 transition-colors text-center">
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
