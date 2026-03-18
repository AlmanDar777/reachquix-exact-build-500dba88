import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const PricingSection = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: t("pricing.starter"), price: "$29", sub: t("pricing.starterSub"),
      features: [t("pricing.starterF1"), t("pricing.starterF2"), t("pricing.starterF3"), t("pricing.starterF4"), t("pricing.starterF5"), t("pricing.starterF6"), t("pricing.starterF7"), t("pricing.starterF8")],
      cta: t("pricing.starterCta"), ctaStyle: "outline" as const, note: t("pricing.starterNote"), popular: false,
    },
    {
      name: t("pricing.growth"), price: "$59", sub: t("pricing.growthSub"),
      features: [t("pricing.growthF1"), t("pricing.growthF2"), t("pricing.growthF3"), t("pricing.growthF4"), t("pricing.growthF5"), t("pricing.growthF6"), t("pricing.growthF7"), t("pricing.growthF8"), t("pricing.growthF9"), t("pricing.growthF10"), t("pricing.growthF11")],
      cta: t("pricing.growthCta"), ctaStyle: "primary" as const, note: t("pricing.growthNote"), popular: true,
    },
    {
      name: t("pricing.agency"), price: "$99", sub: t("pricing.agencySub"),
      features: [t("pricing.agencyF1"), t("pricing.agencyF2"), t("pricing.agencyF3"), t("pricing.agencyF4"), t("pricing.agencyF5"), t("pricing.agencyF6"), t("pricing.agencyF7"), t("pricing.agencyF8"), t("pricing.agencyF9"), t("pricing.agencyF10")],
      cta: t("pricing.agencyCta"), ctaStyle: "dark" as const, note: "", popular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="text-center mb-16">
          <p className="section-label mb-4">{t("pricing.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("pricing.title")}</h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[600px] mx-auto">{t("pricing.subtitle")}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }} className={`bg-white rounded-xl p-6 md:p-8 border relative ${plan.popular ? "border-2 lg:scale-[1.03] z-10" : "border-reachquix-border"}`} style={plan.popular ? { borderColor: "#0C6038" } : {}}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body font-medium text-[13px] text-white" style={{ backgroundColor: "#0C6038" }}>{t("pricing.popular")}</div>
              )}
              <h3 className="font-heading text-[22px] text-reachquix-navy mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-heading text-[38px] text-reachquix-navy">{plan.price}</span>
                <span className="font-body text-[15px] text-reachquix-muted-text">{t("pricing.perMonth")}</span>
              </div>
              <p className="font-body text-[15px] text-reachquix-muted-text leading-[1.6] mb-6">{plan.sub}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#0C6038" }} />
                    <span className="font-body text-[15px] text-reachquix-navy">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full font-body font-medium text-[15px] py-3.5 rounded-lg cursor-pointer transition-all duration-200 ${plan.ctaStyle === "primary" ? "text-white hover:shadow-lg" : plan.ctaStyle === "outline" ? "bg-transparent border-2 hover:bg-reachquix-light-green" : "text-white hover:opacity-90"}`} style={plan.ctaStyle === "primary" ? { backgroundColor: "#0C6038" } : plan.ctaStyle === "outline" ? { borderColor: "#0C6038", color: "#0C6038" } : { backgroundColor: "#0A1628" }}>
                {plan.cta}
              </button>
              {plan.note && <p className="font-body text-[13px] text-reachquix-muted-text text-center mt-3">{plan.note}</p>}
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="text-center mt-8 font-body text-[15px] text-reachquix-muted-text">
          {t("pricing.notSure")}{" "}
          <a href="#" className="font-medium underline cursor-pointer" style={{ color: "#0C6038" }}>{t("pricing.talkToTeam")}</a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
