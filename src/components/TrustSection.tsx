import { motion } from "framer-motion";
import { Globe, Lock, Shield, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMobileAnimation } from "@/hooks/useMobileAnimation";

const TrustSection = () => {
  const { t } = useTranslation();
  const { getCardAnimation, getSectionAnimation } = useMobileAnimation();
  const trustCards = [
    { icon: Globe, title: t("trust.c1Title"), desc: t("trust.c1Desc") },
    { icon: Lock, title: t("trust.c2Title"), desc: t("trust.c2Desc") },
    { icon: Shield, title: t("trust.c3Title"), desc: t("trust.c3Desc") },
    { icon: Server, title: t("trust.c4Title"), desc: t("trust.c4Desc") },
  ];

  return (
    <section id="trust" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...getSectionAnimation()} className="text-center mb-16">
          <p className="section-label mb-4">{t("trust.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy" style={{ textWrap: "balance" } as React.CSSProperties}>{t("trust.title")}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustCards.map((card, i) => (
            <motion.div key={i} {...getCardAnimation(i)} className="bg-white rounded-xl p-6 border border-reachquix-border gpu-accelerated" style={{ borderTop: "4px solid #0C6038" }}>
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
