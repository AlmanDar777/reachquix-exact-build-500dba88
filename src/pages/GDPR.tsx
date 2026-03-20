import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rights = [
  { title: "Right to Access", desc: "Request a complete copy of all personal data we hold about you." },
  { title: "Right to Rectification", desc: "Request correction of any inaccurate or incomplete personal data." },
  { title: "Right to Erasure", desc: "Request permanent deletion of your personal data from our systems." },
  { title: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
  { title: "Right to Object", desc: "Object to the processing of your personal data for certain purposes." },
  { title: "Right to Restrict Processing", desc: "Request that we limit how we process your personal data." },
];

const measures = [
  "AES-256 encryption for all data at rest",
  "TLS 1.3 encryption for all data in transit",
  "EU-based servers and data centers",
  "Regular security audits and penetration testing",
  "Strict employee data access policies",
  "Automated data retention and deletion policies",
  "One-click unsubscribe in every email",
  "Data Processing Agreements with all sub-processors",
];

const GDPR = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-white" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">GDPR Compliance</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[600px] mx-auto">Reachquix OÜ is fully committed to GDPR compliance. We are registered in Estonia, European Union, and treat data protection as a core business value.</motion.p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Our Commitment</h2>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-4">As a company registered in the European Union, we are fully subject to and compliant with the General Data Protection Regulation (GDPR). We believe that data privacy is a fundamental right, not a feature — and we have built our entire platform with this principle at its core.</p>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">Our legal basis for processing personal data is contractual necessity (to provide our services), legitimate interest (to improve our platform), and consent (for marketing communications).</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Your Rights Under GDPR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, i) => (
                  <div key={i} className="rounded-xl border border-border p-5">
                    <h3 className="font-heading text-[16px] text-secondary mb-2">{right.title}</h3>
                    <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-[14px] text-muted-foreground mt-4">To exercise any of these rights, email us at <a href="mailto:privacy@reachquix.com" className="text-primary hover:underline">privacy@reachquix.com</a>. We will respond within 30 days.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Security Measures</h2>
              <div className="space-y-3">
                {measures.map((measure, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span className="font-body text-[15px] text-secondary">{measure}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Data Processing</h2>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-4">When you use Reachquix to send email campaigns, you act as the Data Controller and Reachquix acts as the Data Processor. We process your contacts' data only as instructed by you and only for the purpose of delivering your campaigns.</p>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground">Contact data imported from Google Sheets is processed in real-time and is not permanently stored on our servers. Your data remains in your Google account under your control.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">Contact Our DPO</h2>
              <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-4">For any GDPR-related inquiries, data subject requests, or concerns about how we handle your data:</p>
              <div className="bg-muted rounded-xl p-6 border border-border">
                <p className="font-body text-[15px] text-secondary mb-1"><strong>Email:</strong> privacy@reachquix.com</p>
                <p className="font-body text-[15px] text-secondary mb-1"><strong>Company:</strong> Reachquix OÜ</p>
                <p className="font-body text-[15px] text-secondary"><strong>Registered Office:</strong> Tallinn, Estonia, European Union</p>
              </div>
            </motion.div>

            <div className="border-t border-border pt-8 mt-12">
              <p className="font-body text-[14px] text-muted-foreground text-center">© 2026 Reachquix OÜ. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
