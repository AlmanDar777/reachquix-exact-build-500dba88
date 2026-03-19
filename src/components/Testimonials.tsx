import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    { quote: t("testimonials.t1Quote"), name: t("testimonials.t1Name"), title: t("testimonials.t1Title") },
    { quote: t("testimonials.t2Quote"), name: t("testimonials.t2Name"), title: t("testimonials.t2Title") },
    { quote: t("testimonials.t3Quote"), name: t("testimonials.t3Name"), title: t("testimonials.t3Title") },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} className="text-center mb-16">
          <p className="section-label mb-4">{t("testimonials.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy" style={{ textWrap: "balance" } as React.CSSProperties}>{t("testimonials.title")}</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((tm, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }} className="bg-white rounded-xl p-6 border border-reachquix-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="#0C6038" style={{ color: "#0C6038" }} />
                ))}
              </div>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-navy mb-6">"{tm.quote}"</p>
              <div>
                <p className="font-body font-medium text-[15px] text-reachquix-navy">{tm.name}</p>
                <p className="font-body text-[13px] text-reachquix-muted-text">{tm.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
