import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title: "1. Introduction", content: "Reachquix OÜ (registered in Estonia, EU) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform and services." },
  { title: "2. Information We Collect", content: "We collect the following data when you use Reachquix:\n\n• Account information: your name, email address, company name, and password.\n• Usage data: how you interact with our platform, features you use, and performance metrics.\n• Contact data: email addresses and names you import from Google Sheets for your campaigns. This data is processed but not permanently stored on our servers.\n• Payment information: processed securely through our payment partner Paddle. We do not store your credit card details." },
  { title: "3. How We Use Your Information", content: "We use your information to:\n\n• Provide and maintain the Reachquix platform and its features.\n• Process your email campaigns and manage your CRM data.\n• Improve our platform based on usage patterns and feedback.\n• Send you important updates about your account and our service.\n• Provide customer support when you reach out to us." },
  { title: "4. Data Storage", content: "Your account data is stored securely on servers located in the European Union. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Your data is backed up regularly and stored in geographically distributed data centers for redundancy." },
  { title: "5. Google Sheets Data", content: "When you connect your Google Sheet to Reachquix, we access only the specific sheet and columns you authorize. We read your contact data to process campaigns but do not permanently store your Google Sheets data on our servers. Your contacts remain in your Google account under your control at all times." },
  { title: "6. Third-Party Services", content: "We use the following third-party services:\n\n• SMTP providers: to send emails on your behalf through your own mail server.\n• Paddle: for secure payment processing and subscription management.\n• Google APIs: for Google Sheets integration (read-only access to authorized sheets).\n\nEach third-party provider has their own privacy policy and data protection measures." },
  { title: "7. Your Rights (GDPR)", content: "Under the General Data Protection Regulation (GDPR), you have the right to:\n\n• Access: Request a copy of all personal data we hold about you.\n• Rectification: Request correction of any inaccurate personal data.\n• Erasure: Request deletion of your personal data (\"right to be forgotten\").\n• Data Portability: Request your data in a machine-readable format.\n• Objection: Object to processing of your personal data for specific purposes.\n• Restriction: Request restriction of processing of your personal data.\n\nTo exercise any of these rights, contact us at privacy@reachquix.com." },
  { title: "8. Data Retention", content: "We retain your account data for as long as your account is active. If you delete your account, we will remove your personal data within 30 days. Campaign performance data (anonymized) may be retained for up to 12 months for analytics purposes. Legal and billing records are retained as required by Estonian and EU law." },
  { title: "9. Cookies", content: "We use essential cookies to keep you logged in and maintain your session. We use analytics cookies to understand how our platform is used and improve the experience. You can manage cookie preferences in your browser settings. We do not use advertising or tracking cookies." },
  { title: "10. Contact", content: "For privacy questions, data requests, or concerns, please contact our Data Protection team:\n\nEmail: privacy@reachquix.com\nCompany: Reachquix OÜ\nRegistered Office: Tallinn, Estonia, European Union" },
  { title: "11. Changes to This Policy", content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through a notice on our platform. Continued use of Reachquix after changes constitutes acceptance of the updated policy." },
];

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">Privacy Policy</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] text-white/85">Last updated: March 2026</motion.p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto">
            {sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-10">
                <h2 className="font-heading text-[20px] md:text-[24px] text-secondary mb-4">{section.title}</h2>
                <p className="font-body text-[15px] leading-[1.8] text-muted-foreground whitespace-pre-line">{section.content}</p>
              </motion.div>
            ))}
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

export default Privacy;
