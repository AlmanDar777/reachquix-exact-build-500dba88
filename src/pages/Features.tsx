import { motion } from "framer-motion";
import { Zap, Eye, Server, Sparkles, UserCheck, ShieldCheck, Contact, Kanban, Bell, BarChart3, UsersRound, Database, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FeatureGrid = ({ title, features }: { title: string; features: { icon: any; title: string; desc: string }[] }) => (
  <div className="mb-20">
    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary text-center mb-12">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-xl p-6 border border-border hover:-translate-y-1 hover:border-primary transition-all duration-200">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/5"><f.icon size={24} className="text-primary" /></div>
          <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-3">{f.title}</h3>
          <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const Features = () => {
  const { t } = useTranslation();
  const emailFeatures = [
    { icon: Zap, title: t("emailFeatures.f1Title"), desc: t("emailFeatures.f1Desc") },
    { icon: Eye, title: t("emailFeatures.f2Title"), desc: t("emailFeatures.f2Desc") },
    { icon: Server, title: t("emailFeatures.f3Title"), desc: t("emailFeatures.f3Desc") },
    { icon: Sparkles, title: t("emailFeatures.f4Title"), desc: t("emailFeatures.f4Desc") },
    { icon: UserCheck, title: t("emailFeatures.f5Title"), desc: t("emailFeatures.f5Desc") },
    { icon: ShieldCheck, title: t("emailFeatures.f6Title"), desc: t("emailFeatures.f6Desc") },
  ];
  const crmFeatures = [
    { icon: Contact, title: t("crmFeatures.f1Title"), desc: t("crmFeatures.f1Desc") },
    { icon: Kanban, title: t("crmFeatures.f2Title"), desc: t("crmFeatures.f2Desc") },
    { icon: Bell, title: t("crmFeatures.f3Title"), desc: t("crmFeatures.f3Desc") },
    { icon: BarChart3, title: t("crmFeatures.f4Title"), desc: t("crmFeatures.f4Desc") },
    { icon: UsersRound, title: t("crmFeatures.f5Title"), desc: t("crmFeatures.f5Desc") },
    { icon: Database, title: t("crmFeatures.f6Title"), desc: t("crmFeatures.f6Desc") },
  ];
  const integrations = [
    { name: "Google Sheets", status: t("featuresPage.available") },
    { name: "Namecheap SMTP", status: t("featuresPage.available") },
    { name: "Amazon SES", status: t("featuresPage.available") },
    { name: "Brevo", status: t("featuresPage.available") },
    { name: "Gmail", status: t("featuresPage.available") },
    { name: "Outlook", status: t("featuresPage.available") },
    { name: "WhatsApp", status: t("featuresPage.comingSoon") },
    { name: "Zapier", status: t("featuresPage.comingSoon") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mb-4 text-white/80">{t("featuresPage.label")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-[32px] md:text-[48px] leading-[1.2] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>{t("featuresPage.title")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[700px] mx-auto">{t("featuresPage.subtitle")}</motion.p>
          </div>
        </section>
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <FeatureGrid title={t("featuresPage.emailTitle")} features={emailFeatures} />
            <FeatureGrid title={t("featuresPage.crmTitle")} features={crmFeatures} />
            <div className="mb-20">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary text-center mb-12">{t("featuresPage.integrationsTitle")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {integrations.map((int, i) => (
                  <motion.div key={int.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white rounded-xl p-4 border border-border flex items-center justify-between">
                    <span className="font-body text-[15px] text-secondary">{int.name}</span>
                    <span className={`font-body text-[12px] font-medium px-2 py-0.5 rounded-full ${int.status === t("featuresPage.available") ? "bg-primary/10 text-primary" : "bg-orange-100 text-orange-700"}`}>{int.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-8">{t("featuresPage.everythingTitle")}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] mx-auto">
                {[t("pricing.starterF1"), t("pricing.starterF4"), t("pricing.starterF5"), t("pricing.growthF5"), t("pricing.growthF6"), t("pricing.growthF7"), t("pricing.starterF3"), t("pricing.growthF8"), t("pricing.growthF10"), t("pricing.growthF9"), t("pricing.growthF2"), t("pricing.agencyF5")].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="font-body text-[15px] text-secondary">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center py-12">
              <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">{t("featuresPage.trialCta")}</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/signup" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-center">{t("featuresPage.getStarted")}</a>
                <a href="/pricing" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary/5 transition-colors text-center">{t("featuresPage.seePricing")}</a>
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
