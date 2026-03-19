import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMobileAnimation } from "@/hooks/useMobileAnimation";

const competitors = ["Instantly", "Smartlead", "Lemlist"];

const WhyReachquix = () => {
  const { t } = useTranslation();
  const { getCardAnimation, getSectionAnimation, getSlideAnimation } = useMobileAnimation();
  const comparisonData = [
    t("whyReachquix.f1"), t("whyReachquix.f2"), t("whyReachquix.f3"),
    t("whyReachquix.f4"), t("whyReachquix.f5"), t("whyReachquix.f6"),
    t("whyReachquix.f7"), t("whyReachquix.f8"), t("whyReachquix.f9"),
  ];
  const cards = [
    { title: t("whyReachquix.card1Title"), desc: t("whyReachquix.card1Desc") },
    { title: t("whyReachquix.card2Title"), desc: t("whyReachquix.card2Desc") },
    { title: t("whyReachquix.card3Title"), desc: t("whyReachquix.card3Desc") },
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...getSectionAnimation()} className="text-center mb-16">
          <p className="section-label mb-4">{t("whyReachquix.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("whyReachquix.title")}</h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">{t("whyReachquix.subtitle")}</p>
        </motion.div>

        <motion.div {...getSectionAnimation()} className="mb-16">
          <p className="font-body font-medium text-[16px] text-reachquix-navy text-center mb-6">{t("whyReachquix.comparisonIntro")}</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-reachquix-border">
                  <th className="text-left font-body font-medium text-[14px] text-reachquix-muted-text py-3 px-4">{t("whyReachquix.featureCol")}</th>
                  {competitors.map((c) => (
                    <th key={c} className="text-center font-body font-medium text-[14px] text-reachquix-muted-text py-3 px-4">{c}</th>
                  ))}
                  <th className="text-center font-heading text-[14px] py-3 px-4" style={{ color: "#0C6038" }}>Reachquix</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((feature, i) => (
                  <motion.tr key={i} {...getSlideAnimation(i)} className="border-b border-reachquix-border">
                    <td className="font-body text-[15px] text-reachquix-navy py-3 px-4">{feature}</td>
                    {competitors.map((c) => (
                      <td key={c} className="text-center py-3 px-4"><X size={18} className="mx-auto text-red-400" /></td>
                    ))}
                    <td className="text-center py-3 px-4" style={{ backgroundColor: "rgba(12,96,56,0.05)" }}>
                      <Check size={18} className="mx-auto" style={{ color: "#0C6038" }} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="space-y-6">
          {cards.map((card, i) => (
            <motion.div key={i} {...getCardAnimation(i)} className="bg-white rounded-xl p-6 border-l-4 gpu-accelerated" style={{ borderLeftColor: "#0C6038", borderTop: "1px solid #E2E8F0", borderRight: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
              <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-3">{card.title}</h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReachquix;
