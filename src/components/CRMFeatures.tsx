import { motion } from "framer-motion";
import { Contact, Kanban, Bell, BarChart3, UsersRound, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const CRMFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { icon: Contact, title: t("crmFeatures.f1Title"), desc: t("crmFeatures.f1Desc") },
    { icon: Kanban, title: t("crmFeatures.f2Title"), desc: t("crmFeatures.f2Desc") },
    { icon: Bell, title: t("crmFeatures.f3Title"), desc: t("crmFeatures.f3Desc") },
    { icon: BarChart3, title: t("crmFeatures.f4Title"), desc: t("crmFeatures.f4Desc") },
    { icon: UsersRound, title: t("crmFeatures.f5Title"), desc: t("crmFeatures.f5Desc") },
    { icon: Database, title: t("crmFeatures.f6Title"), desc: t("crmFeatures.f6Desc") },
  ];

  return (
    <section id="crm" className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="text-center mb-16">
          <p className="section-label mb-4">{t("crmFeatures.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("crmFeatures.title")}</h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">{t("crmFeatures.subtitle")}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }} className="bg-white rounded-xl p-6 border border-reachquix-border hover:-translate-y-1 hover:border-reachquix-green transition-all duration-200 cursor-default">
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

export default CRMFeatures;
