import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We were manually chasing 500 leads every single week. It was exhausting and nothing was getting done consistently. Reachquix automated everything overnight. Our reply rate tripled in the first 30 days and we saved 20+ hours every week.",
    name: "Ahmed Al Mansoori",
    title: "Director, Real Estate Agency — Dubai, UAE",
  },
  {
    quote: "As a marketing agency, we needed a tool that actually understood the Gulf market. Arabic templates, Google Sheets sync, proper CRM — all in one affordable platform. Nothing else comes close at this price point. We moved all our clients to Reachquix.",
    name: "Sara Khalid",
    title: "Founder, Digital Marketing Agency — Abu Dhabi, UAE",
  },
  {
    quote: "We burned three months and a lot of money trying Instantly then Smartlead. Both too complex. Both too expensive. Reachquix was running in 20 minutes flat and our whole sales team actually uses it — which was never the case with the other tools.",
    name: "Ravi Sharma",
    title: "Head of Sales, B2B Technology Company — Dubai, UAE",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">LOVED BY BUSINESSES ACROSS THE GULF</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy" style={{ textWrap: "balance" } as React.CSSProperties}>
            Real businesses. Real results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border border-reachquix-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="#0C6038" style={{ color: "#0C6038" }} />
                ))}
              </div>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-navy mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-medium text-[15px] text-reachquix-navy">{t.name}</p>
                <p className="font-body text-[13px] text-reachquix-muted-text">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
