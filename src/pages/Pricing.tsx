import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    monthly: 29,
    annual: 23,
    sub: "Perfect for solo founders, freelancers and real estate agents ready to automate their outreach.",
    features: [
      "Up to 5,000 contacts", "3 active campaigns", "Email sequences up to 5 steps",
      "Reply detection & auto-pause", "Google Sheets live sync", "Basic CRM — contacts & notes",
      "10 email templates", "Email support",
    ],
    cta: "Start for Free",
    ctaStyle: "outline",
    popular: false,
  },
  {
    name: "Growth",
    monthly: 59,
    annual: 47,
    sub: "For growing agencies and sales teams that need more power and no limits.",
    features: [
      "Everything in Starter", "Unlimited contacts", "Unlimited campaigns",
      "Unlimited sequence steps", "Full CRM — pipeline, tasks & reminders", "AI email writer",
      "Arabic language support", "Real estate template library", "Client reporting dashboard",
      "Team collaboration — 3 seats", "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "primary",
    popular: true,
  },
  {
    name: "Agency",
    monthly: 99,
    annual: 79,
    sub: "For agencies managing outreach for multiple clients who need full control and white-label options.",
    features: [
      "Everything in Growth", "Unlimited team seats", "Multiple client workspaces",
      "White-label dashboard", "Custom branding", "API access",
      "Dedicated account manager", "Custom onboarding call",
      "WhatsApp follow-up integration", "99.9% SLA uptime guarantee",
    ],
    cta: "Contact Us",
    ctaStyle: "dark",
    popular: false,
  },
];

const faqs = [
  { q: "Is there a free trial?", a: "Yes — our Growth plan comes with a 14-day free trial. No credit card required. You can explore all features before committing." },
  { q: "Can I change my plan later?", a: "Absolutely. Upgrade or downgrade anytime from your dashboard. Changes take effect immediately." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex) and PayPal through our secure payment partner Paddle." },
  { q: "Is my data safe?", a: "Yes. Your contact data lives in your Google Sheet under your control. We never permanently store your contacts on our servers." },
  { q: "Do you offer refunds?", a: "Yes — we offer a 14-day money-back guarantee on all paid plans. No questions asked." },
  { q: "What happens when I hit my contact limit?", a: "We will notify you when you are approaching your limit. You can upgrade your plan at any time to increase your limits." },
  { q: "Is Reachquix GDPR compliant?", a: "Yes. Reachquix OÜ is registered in Estonia, EU. We are fully GDPR compliant. Every email includes an unsubscribe link. We never email contacts without permission." },
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
              Simple pricing. No surprises.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 mb-8">
              Start free. Scale as you grow. Cancel anytime.
            </motion.p>
            {/* Toggle */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center gap-4">
              <span className={`font-body text-[15px] ${!annual ? "text-white" : "text-white/60"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-white" : "bg-white/30"}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-primary transition-transform ${annual ? "left-7" : "left-1"}`} />
              </button>
              <span className={`font-body text-[15px] ${annual ? "text-white" : "text-white/60"}`}>Annual (20% off)</span>
            </motion.div>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="section-padding bg-muted">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`bg-white rounded-xl p-6 md:p-8 border relative ${plan.popular ? "border-2 border-primary lg:scale-[1.03] z-10" : "border-border"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body font-medium text-[13px] text-white bg-primary">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-heading text-[22px] text-secondary mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="font-heading text-[38px] text-secondary">${annual ? plan.annual : plan.monthly}</span>
                    <span className="font-body text-[15px] text-muted-foreground">/ month</span>
                  </div>
                  <p className="font-body text-[15px] text-muted-foreground leading-[1.6] mb-6">{plan.sub}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                        <span className="font-body text-[15px] text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/signup"
                    className={`block w-full font-body font-medium text-[15px] py-3.5 rounded-lg text-center transition-all duration-200 ${
                      plan.ctaStyle === "primary" ? "bg-primary text-white hover:bg-primary/90" :
                      plan.ctaStyle === "outline" ? "border-2 border-primary text-primary hover:bg-primary/5" :
                      "bg-secondary text-white hover:bg-secondary/90"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-[26px] md:text-[38px] text-secondary text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading text-[16px] md:text-[18px] text-secondary">{faq.q}</span>
                    <ChevronDown size={20} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="font-body text-[15px] leading-[1.7] text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="text-center mt-16">
              <h3 className="font-heading text-[22px] text-secondary mb-4">Still have questions? Talk to our team.</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-center">
                  Chat with Eva
                </a>
                <a href="mailto:support@reachquix.com" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg border-2 border-border text-secondary hover:bg-muted transition-colors text-center">
                  Email us at support@reachquix.com
                </a>
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
