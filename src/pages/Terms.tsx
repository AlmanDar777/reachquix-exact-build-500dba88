import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using the Reachquix platform (\"Service\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service. Reachquix OÜ, registered in the Republic of Estonia, European Union, operates this Service." },
  { title: "2. Description of Service", content: "Reachquix provides an AI-powered email outreach platform with built-in CRM, Google Sheets integration, email automation, reply detection, and related tools. The Service is offered on a subscription basis with various plan tiers." },
  { title: "3. Account Registration", content: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials. You must be at least 18 years old to use the Service. One person or legal entity per account — sharing accounts is not permitted." },
  { title: "4. Acceptable Use", content: "You agree not to:\n\n• Send spam or unsolicited bulk emails without proper consent.\n• Use the Service to distribute malware, phishing, or fraudulent content.\n• Violate any applicable laws, including anti-spam laws (CAN-SPAM, GDPR, etc.).\n• Attempt to reverse engineer, hack, or disrupt the Service.\n• Share your account credentials with unauthorized users.\n• Use the Service to harvest email addresses without consent.\n\nViolation of these terms may result in immediate account termination." },
  { title: "5. Subscription & Billing", content: "Paid plans are billed monthly or annually as selected at checkout. Payments are processed securely through Paddle. All prices are in USD unless otherwise stated. You may upgrade or downgrade your plan at any time from your dashboard. Downgrades take effect at the end of the current billing period." },
  { title: "6. Free Trial", content: "We offer a 14-day free trial on select plans. No credit card is required to start a trial. At the end of the trial, you may choose a paid plan or your account will be downgraded to the free tier with limited features." },
  { title: "7. Refund Policy", content: "We offer a 14-day money-back guarantee on all paid plans. If you are not satisfied, contact us within 14 days of your first payment for a full refund. Refunds after 14 days are considered on a case-by-case basis." },
  { title: "8. Data Ownership", content: "You retain full ownership of all data you upload, import, or create within the Service. This includes contacts, email templates, campaign data, and CRM records. Reachquix does not claim ownership of your data. Upon account deletion, your data will be permanently removed within 30 days." },
  { title: "9. Service Availability", content: "We strive to maintain 99.9% uptime for the Service. Planned maintenance will be communicated in advance via email. We are not liable for downtime caused by factors beyond our control, including internet outages, third-party service failures, or force majeure events." },
  { title: "10. Limitation of Liability", content: "Reachquix OÜ shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim." },
  { title: "11. Termination", content: "You may cancel your account at any time from your dashboard. We may terminate or suspend your account if you violate these Terms. Upon termination, your right to use the Service ceases immediately. Data deletion follows our data retention policy." },
  { title: "12. Changes to Terms", content: "We may update these Terms from time to time. Material changes will be communicated via email at least 30 days before they take effect. Continued use of the Service after changes constitutes acceptance." },
  { title: "13. Governing Law", content: "These Terms are governed by the laws of the Republic of Estonia and the European Union. Any disputes shall be resolved in the courts of Tallinn, Estonia." },
  { title: "14. Contact", content: "For questions about these Terms of Service, please contact us:\n\nEmail: legal@reachquix.com\nCompany: Reachquix OÜ\nRegistered Office: Tallinn, Estonia, European Union" },
];

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">Terms of Service</motion.h1>
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

export default Terms;
