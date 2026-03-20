import { motion } from "framer-motion";
import { Target, Heart, Globe, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useTranslation();
  const values = [
    { icon: Target, title: t("about.v1Title"), desc: t("about.v1Desc") },
    { icon: Heart, title: t("about.v2Title"), desc: t("about.v2Desc") },
    { icon: Globe, title: t("about.v3Title"), desc: t("about.v3Desc") },
    { icon: Shield, title: t("about.v4Title"), desc: t("about.v4Desc") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mb-4 text-white/80">{t("about.label")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-[32px] md:text-[48px] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>{t("about.title")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[700px] mx-auto">{t("about.subtitle")}</motion.p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><Target size={32} className="text-primary" /></div>
              <h2 className="font-heading text-[26px] md:text-[38px] text-secondary mb-6">{t("about.missionTitle")}</h2>
              <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">{t("about.missionText")}</p>
            </motion.div>
          </div>
        </section>
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[38px] text-secondary text-center mb-12">{t("about.valuesTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4"><v.icon size={24} className="text-primary" /></div>
                  <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-3">{v.title}</h3>
                  <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-muted">
          <div className="max-w-[800px] mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"><Globe size={32} className="text-primary" /></div>
            <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-6">{t("about.euTitle")}</h2>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground mb-4">{t("about.euDesc")}</p>
            <p className="font-body text-[14px] text-muted-foreground">{t("about.euLocation")}</p>
          </div>
        </section>
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-[28px] md:text-[38px] text-white mb-6">{t("about.ctaTitle")}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/signup" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors text-center">{t("about.getStarted")}</a>
              <a href="/contact" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors text-center">{t("about.contactUs")}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
