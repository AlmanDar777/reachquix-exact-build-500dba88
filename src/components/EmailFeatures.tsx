import { motion } from "framer-motion";
import { Zap, Eye, Server, Sparkles, UserCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Smart Multi-Step Sequences",
    desc: "Send up to 10 perfectly timed follow-up emails to every contact. Each email only sends if the contact has not replied yet — so you never look desperate, never double-email anyone, and always follow up at exactly the right moment.",
  },
  {
    icon: Eye,
    title: "Instant Reply Detection",
    desc: "Reachquix monitors your inbox every 15 minutes, around the clock. The moment a contact replies, their sequence stops immediately, they are flagged as a hot lead in your CRM, and you receive an instant notification. No one slips through the cracks.",
  },
  {
    icon: Server,
    title: "Your Own Mail Server",
    desc: "Unlike every other tool, Reachquix lets you use your own private mail server — Namecheap, cPanel, or any SMTP provider. Keep your domain reputation strong, avoid shared blacklists, and never pay extra sending fees again.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Email Writer",
    desc: "Staring at a blank screen? Our built-in AI writes proven, high-converting cold email sequences for your specific industry in seconds. Real estate, agencies, B2B, retail, consulting — just tell it your goal and it writes the emails.",
  },
  {
    icon: UserCheck,
    title: "Deep Personalization at Scale",
    desc: "Send to 10,000 people and make every single one feel personally written. Insert {{FirstName}}, {{Company}}, {{City}}, {{JobTitle}} and your own custom variables automatically. Mass outreach that feels like a one-on-one message.",
  },
  {
    icon: ShieldCheck,
    title: "Smart Bounce & Unsubscribe Handling",
    desc: "Bounced addresses are caught, flagged, and removed from active sequences automatically. Every email includes a legally required one-click unsubscribe link. Your domain stays healthy, your reputation stays clean, and you stay compliant.",
  },
];

const EmailFeatures = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">EMAIL AUTOMATION</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            Outreach that works while you sleep
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">
            Set up your sequences once. Reachquix runs your entire outreach operation on autopilot — 24 hours a day, 7 days a week, 365 days a year. No babysitting required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border border-reachquix-border hover:-translate-y-1 hover:border-reachquix-green transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F0FDF4" }}>
                <f.icon size={24} style={{ color: "#0C6038" }} />
              </div>
              <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-3">{f.title}</h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailFeatures;
