import { motion } from "framer-motion";
import { Globe, Lock, Shield, Server } from "lucide-react";

const trustCards = [
  {
    icon: Globe,
    title: "Registered in the European Union",
    desc: "Reachquix is proudly registered as Reachquix OÜ in the Republic of Estonia, European Union. You get the legal security, data protection, and international credibility of a fully regulated European company — at a price made for real businesses.",
  },
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    desc: "We never permanently store your contacts on our servers. Your data lives in YOUR Google Sheet, in YOUR account, under YOUR control. We only read it when you tell us to. Your leads are yours — always.",
  },
  {
    icon: Shield,
    title: "Your Domain. Your Reputation.",
    desc: "We never put your emails on a shared sending IP that can get blacklisted overnight. Every email goes through YOUR private mail server — so your domain reputation is protected, your deliverability stays high, and your sender score is never at the mercy of someone else.",
  },
  {
    icon: Server,
    title: "99.9% Uptime — Always On",
    desc: "Your campaigns never sleep and neither does Reachquix. Built on enterprise-grade infrastructure with automatic failover. Whether it is 3am Friday or 8am Monday — your sequences are running, your replies are being detected, and your leads are being managed.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">BUILT WITH TRUST</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy" style={{ textWrap: "balance" } as React.CSSProperties}>
            Enterprise-grade security. Startup-friendly price.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border border-reachquix-border"
              style={{ borderTop: "4px solid #0C6038" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F0FDF4" }}>
                <card.icon size={24} style={{ color: "#0C6038" }} />
              </div>
              <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-3">{card.title}</h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
