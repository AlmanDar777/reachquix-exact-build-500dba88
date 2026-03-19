import { motion } from "framer-motion";
import { Mail, Users, Sheet } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMobileAnimation } from "@/hooks/useMobileAnimation";

const PlatformOverview = () => {
  const { t } = useTranslation();
  const { getCardAnimation, getSectionAnimation } = useMobileAnimation();
  const pillars = [
    { icon: Mail, title: t("platform.emailTitle"), desc: t("platform.emailDesc") },
    { icon: Users, title: t("platform.crmTitle"), desc: t("platform.crmDesc") },
    { icon: Sheet, title: t("platform.sheetsTitle"), desc: t("platform.sheetsDesc") },
  ];

  return (
    <section id="features" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...getSectionAnimation()} className="text-center mb-16">
          <p className="section-label mb-4">{t("platform.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("platform.title")}</h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">{t("platform.subtitle")}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div key={i} {...getCardAnimation(i)} className="bg-white rounded-xl p-6 border border-reachquix-border hover:-translate-y-1 hover:border-reachquix-green transition-all duration-200 cursor-default gpu-accelerated">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F0FDF4" }}>
                <pillar.icon size={24} style={{ color: "#0C6038" }} />
              </div>
              <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-3">{pillar.title}</h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
