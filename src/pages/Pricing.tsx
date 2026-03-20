import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const { t } = useTranslation();
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    { name: t("pricing.starter"), monthly: 29, annual: 23, sub: t("pricing.starterSub"), features: [t("pricing.starterF1"), t("pricing.starterF2"), t("pricing.starterF3"), t("pricing.starterF4"), t("pricing.starterF5"), t("pricing.starterF6"), t("pricing.starterF7"), t("pricing.starterF8"), t("pricing.starterF9"), t("pricing.starterF10"), t("pricing.starterF11")], cta: t("pricing.starterCta"), ctaStyle: "outline", popular: false },
    { name: t("pricing.growth"), monthly: 59, annual: 47, sub: t("pricing.growthSub"), features: [t("pricing.growthF1"), t("pricing.growthF2"), t("pricing.growthF3"), t("pricing.growthF4"), t("pricing.growthF5"), t("pricing.growthF6"), t("pricing.growthF7"), t("pricing.growthF8"), t("pricing.growthF9"), t("pricing.growthF10"), t("pricing.growthF11")], cta: t("pricing.growthCta"), ctaStyle: "primary", popular: true },
    { name: t("pricing.agency"), monthly: 99, annual: 79, sub: t("pricing.agencySub"), features: [t("pricing.agencyF1"), t("pricing.agencyF2"), t("pricing.agencyF3"), t("pricing.agencyF4"), t("pricing.agencyF5"), t("pricing.agencyF6"), t("pricing.agencyF7"), t("pricing.agencyF8"), t("pricing.agencyF9"), t("pricing.agencyF10")], cta: t("pricing.agencyCta"), ctaStyle: "dark", popular: false },
  ];

  const faqs = [
    { q: t("pricingPage.faq1Q"), a: t("pricingPage.faq1A") },
    { q: t("pricingPage.faq2Q"), a: t("pricingPage.faq2A") },
    { q: t("pricingPage.faq3Q"), a: t("pricingPage.faq3A") },
    { q: t("pricingPage.faq4Q"), a: t("pricingPage.faq4A") },
    { q: t("pricingPage.faq5Q"), a: t("pricingPage.faq5A") },
    { q: t("pricingPage.faq6Q"), a: t("pricingPage.faq6A") },
    { q: t("pricingPage.faq7Q"), a: t("pricingPage.faq7A") },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("pricingPage.title")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 mb-8">{t("pricingPage.subtitle")}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center gap-4">
              <span className={`font-body text-[15px] ${!annual ? "text-white" : "text-white/60"}`}>{t("pricing.monthly")}</span>
              <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-white" : "bg-white/30"}`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-primary transition-transform ${annual ? "left-7" : "left-1"}`} />
              </button>
              <span className={`font-body text-[15px] ${annual ? "text-white" : "text-white/60"}`}>{t("pricing.annual")}</span>
            </motion.div>
          </div>
        </section>
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {plans.map((plan, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className={`bg-white rounded-xl p-6 md:p-8 border relative ${plan.popular ? "border-2 border-primary lg:scale-[1.03] z-10" : "border-border"}`}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body font-medium text-[13px] text-white bg-primary">{t("pricing.popular")}</div>}
                  <h3 className="font-heading text-[22px] text-secondary mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-heading text-[38px] text-secondary">${annual ? plan.annual : plan.monthly}</span>
                    <span className="font-body text-[15px] text-muted-foreground">{t("pricing.perMonth")}</span>
                  </div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.6] mb-6">{plan.sub}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3"><Check size={18} className="mt-0.5 flex-shrink-0 text-primary" /><span className="font-body text-[15px] text-secondary">{f}</span></li>
                    ))}
                  </ul>
                  <a href="/signup" className={`block w-full font-body font-medium text-[15px] py-3.5 rounded-lg text-center transition-all duration-200 ${plan.ctaStyle === "primary" ? "bg-primary text-white hover:bg-primary/90" : plan.ctaStyle === "outline" ? "border-2 border-primary text-primary hover:bg-primary/5" : "bg-secondary text-white hover:bg-secondary/90"}`}>{plan.cta}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[38px] text-secondary text-center mb-12">{t("pricingPage.faqTitle")}</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-heading text-[16px] md:text-[18px] text-secondary">{faq.q}</span>
                    <ChevronDown size={20} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5"><p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{faq.a}</p></div>}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <h3 className="font-heading text-[22px] text-secondary mb-4">{t("pricingPage.stillQuestions")}</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-center">{t("pricingPage.chatWithEva")}</a>
                <a href="mailto:support@reachquix.com" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-border text-secondary hover:bg-muted transition-colors text-center">{t("pricingPage.emailUs")}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
