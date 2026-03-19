import { motion } from "framer-motion";
import { MessageSquare, Sparkles, ShieldCheck, Clock, Wand2, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const AIFeatures = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: MessageSquare,
      title: t("aiFeatures.f1Title"),
      desc: t("aiFeatures.f1Desc"),
    },
    {
      icon: Sparkles,
      title: t("aiFeatures.f2Title"),
      desc: t("aiFeatures.f2Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("aiFeatures.f3Title"),
      desc: t("aiFeatures.f3Desc"),
    },
    {
      icon: Clock,
      title: t("aiFeatures.f4Title"),
      desc: t("aiFeatures.f4Desc"),
    },
    {
      icon: Wand2,
      title: t("aiFeatures.f5Title"),
      desc: t("aiFeatures.f5Desc"),
    },
    {
      icon: Search,
      title: t("aiFeatures.f6Title"),
      desc: t("aiFeatures.f6Desc"),
    },
  ];

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
          <p className="section-label mb-4">{t("aiFeatures.label")}</p>
          <h2
            className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            {t("aiFeatures.title")}
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">
            {t("aiFeatures.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border border-border hover:-translate-y-1 hover:border-primary transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-primary/5">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-3">
                {f.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
