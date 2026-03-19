import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();
  return (
    <section id="cta" style={{ backgroundColor: "#0C6038" }}>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="section-padding">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading text-[28px] md:text-[44px] leading-[1.2] tracking-[-0.02em] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
            {t("finalCta.title")}
          </motion.h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-white/85 max-w-[600px] mx-auto mb-8">{t("finalCta.subtitle")}</p>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="#" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg cursor-pointer transition-all duration-200 text-center hover:shadow-lg" style={{ backgroundColor: "white", color: "#0C6038" }}>{t("finalCta.cta")}</a>
            <a href="#" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg cursor-pointer transition-all duration-200 text-center border-2 border-white text-white hover:bg-white/10">{t("finalCta.demo")}</a>
          </motion.div>
          <p className="font-body text-[13px] text-white/75">{t("finalCta.note")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
