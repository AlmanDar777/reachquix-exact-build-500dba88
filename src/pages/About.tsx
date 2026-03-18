import { motion } from "framer-motion";
import { Target, Heart, Globe, Users, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Target, title: "Customer First", desc: "Every feature we build starts with a real customer need. We listen to businesses in the Gulf and build exactly what they ask for." },
  { icon: Heart, title: "Simplicity Above All", desc: "If our software needs a manual, we have failed. Reachquix is designed to be used by anyone — from first-time entrepreneurs to seasoned sales teams." },
  { icon: Globe, title: "Built for the Region", desc: "Arabic support, local market understanding, real estate focus, WhatsApp integration — we build for how business actually works in the UAE and MENA." },
  { icon: Shield, title: "Trust & Transparency", desc: "EU registered company. GDPR compliant. Your data stays yours. No hidden fees. No surprise charges. What you see is what you get." },
];

const team = [
  { name: "Moaz Ahmed", role: "Founder & CEO", desc: "Based in Dubai. Background in AI marketing and sales automation. Built Reachquix to solve problems he experienced firsthand." },
  { name: "Technical Team", role: "Engineering", desc: "A distributed team of engineers building the platform with enterprise-grade reliability and startup-speed agility." },
  { name: "Support Team", role: "Customer Success", desc: "Based in Dubai, available to help customers get the most out of Reachquix every single day." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mb-4 text-white/80">ABOUT US</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-[32px] md:text-[48px] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
              Built by people who understand your market.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[700px] mx-auto">
              We are not a Silicon Valley startup. We are a team based in Dubai, UAE — and we built Reachquix because we could not find a single outreach tool that actually worked for the Gulf market.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h2 className="font-heading text-[26px] md:text-[38px] text-secondary mb-6">Our Mission</h2>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">
                To give every business in the UAE and MENA region — from solo real estate agents to full-scale agencies — access to the same powerful outreach tools that Fortune 500 companies use. Without the Fortune 500 price tag.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[38px] text-secondary text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-3">{v.title}</h3>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[38px] text-secondary text-center mb-12">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-xl border border-border"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] text-secondary mb-1">{t.name}</h3>
                  <p className="font-body text-[14px] text-primary font-medium mb-3">{t.role}</p>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EU Registration */}
        <section className="section-padding bg-muted">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe size={32} className="text-primary" />
            </div>
            <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">EU Registered Company</h2>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground mb-4">
              Reachquix OÜ is proudly registered in the Republic of Estonia, European Union — giving you the security and credibility of a fully regulated European company.
            </p>
            <p className="font-body text-[14px] text-muted-foreground">
              Operations: Dubai, UAE · Registered Office: Tallinn, Estonia
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[28px] md:text-[38px] text-white mb-6">Ready to grow your business?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/signup" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors text-center">
                Get Started Free →
              </a>
              <a href="/contact" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors text-center">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
