import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    sub: "Perfect for solo founders, freelancers and real estate agents ready to automate their outreach.",
    features: [
      "Up to 5,000 contacts",
      "3 active campaigns",
      "Email sequences up to 5 steps",
      "Reply detection & auto-pause",
      "Google Sheets live sync",
      "Basic CRM — contacts & notes",
      "10 email templates",
      "Email support",
    ],
    cta: "Start for Free",
    ctaStyle: "outline" as const,
    note: "No credit card required",
    popular: false,
  },
  {
    name: "Growth",
    price: "$59",
    sub: "For growing agencies and sales teams that need more power and no limits.",
    features: [
      "Everything in Starter",
      "Unlimited contacts",
      "Unlimited campaigns",
      "Unlimited sequence steps",
      "Full CRM — pipeline, tasks & reminders",
      "AI email writer",
      "Arabic language support",
      "Real estate template library",
      "Client reporting dashboard",
      "Team collaboration — 3 seats",
      "Priority support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "primary" as const,
    note: "14-day free trial — no credit card needed",
    popular: true,
  },
  {
    name: "Agency",
    price: "$99",
    sub: "For agencies managing outreach for multiple clients who need full control and white-label options.",
    features: [
      "Everything in Growth",
      "Unlimited team seats",
      "Multiple client workspaces",
      "White-label dashboard",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Custom onboarding call",
      "WhatsApp follow-up integration",
      "99.9% SLA uptime guarantee",
    ],
    cta: "Contact Us",
    ctaStyle: "dark" as const,
    note: "",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">SIMPLE, HONEST PRICING</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            Everything included. One price. No surprises.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[600px] mx-auto">
            No per-user fees. No add-ons. No credits. No overage charges. Pick your plan and get every feature — from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              className={`bg-white rounded-xl p-6 md:p-8 border relative ${
                plan.popular
                  ? "border-2 lg:scale-[1.03] z-10"
                  : "border-reachquix-border"
              }`}
              style={plan.popular ? { borderColor: "#0C6038" } : {}}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-body font-medium text-[13px] text-white"
                  style={{ backgroundColor: "#0C6038" }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-[22px] text-reachquix-navy mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-heading text-[38px] text-reachquix-navy">{plan.price}</span>
                <span className="font-body text-[15px] text-reachquix-muted-text">/ month</span>
              </div>
              <p className="font-body text-[15px] text-reachquix-muted-text leading-[1.6] mb-6">{plan.sub}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 flex-shrink-0" style={{ color: "#0C6038" }} />
                    <span className="font-body text-[15px] text-reachquix-navy">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full font-body font-medium text-[15px] py-3.5 rounded-lg cursor-pointer transition-all duration-200 ${
                  plan.ctaStyle === "primary"
                    ? "text-white hover:shadow-lg"
                    : plan.ctaStyle === "outline"
                    ? "bg-transparent border-2 hover:bg-reachquix-light-green"
                    : "text-white hover:opacity-90"
                }`}
                style={
                  plan.ctaStyle === "primary"
                    ? { backgroundColor: "#0C6038" }
                    : plan.ctaStyle === "outline"
                    ? { borderColor: "#0C6038", color: "#0C6038" }
                    : { backgroundColor: "#0A1628" }
                }
              >
                {plan.cta}
              </button>
              {plan.note && (
                <p className="font-body text-[13px] text-reachquix-muted-text text-center mt-3">{plan.note}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 font-body text-[15px] text-reachquix-muted-text"
        >
          Not sure which plan is right for you?{" "}
          <a href="#" className="font-medium underline cursor-pointer" style={{ color: "#0C6038" }}>
            Talk to our team →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
