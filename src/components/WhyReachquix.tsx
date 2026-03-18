import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  "Google Sheets live sync",
  "Built-in CRM",
  "Use your own mail server",
  "Arabic language support",
  "Real estate templates",
  "Built for MENA market",
  "Flat pricing under $30",
  "Simple UI — zero training",
  "EU registered company",
];

const competitors = ["Instantly", "Smartlead", "Lemlist"];

const cards = [
  {
    title: "No More CSV Uploads — Ever",
    desc: "Every other tool in the world makes you export a spreadsheet, clean it up, save it as CSV, upload it, wait for it to process — then do it all again next week. Reachquix connects directly to your live Google Sheet. Your contacts are always up to date, always in sync, and you never touch a CSV file again.",
  },
  {
    title: "One Tool Instead of Four",
    desc: "Right now you are probably paying for a separate email tool ($39+), a CRM ($50+), a scheduling tool ($15+), and a reporting tool ($20+). That is $124/month for four disconnected tools. Reachquix gives you all of it in one dashboard, for one flat price, with one login. The math is simple.",
  },
  {
    title: "Built by Someone Who Knows Your Market",
    desc: "Our team lives and works in Dubai. We know that business in the Gulf runs differently. We know that WhatsApp matters as much as email. We know that real estate is the biggest industry in the region. We know what Arabic-speaking clients expect. We built Reachquix with all of that in mind — because no tool built in San Francisco ever will.",
  },
];

const WhyReachquix = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">WHY REACHQUIX</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            Built different. Built for you.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">
            Every other email tool was built by Americans, for Americans, priced for Silicon Valley. We built Reachquix for businesses in the UAE, MENA, and the Gulf — where deals are bigger, relationships matter more, and nobody has time to learn complicated software.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-16"
        >
          <p className="font-body font-medium text-[16px] text-reachquix-navy text-center mb-6">
            See exactly what you get with Reachquix vs the competition:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-reachquix-border">
                  <th className="text-left font-body font-medium text-[14px] text-reachquix-muted-text py-3 px-4">Feature</th>
                  {competitors.map((c) => (
                    <th key={c} className="text-center font-body font-medium text-[14px] text-reachquix-muted-text py-3 px-4">{c}</th>
                  ))}
                  <th className="text-center font-heading text-[14px] py-3 px-4" style={{ color: "#0C6038" }}>Reachquix</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((feature, i) => (
                  <motion.tr
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                    className="border-b border-reachquix-border"
                  >
                    <td className="font-body text-[15px] text-reachquix-navy py-3 px-4">{feature}</td>
                    {competitors.map((c) => (
                      <td key={c} className="text-center py-3 px-4">
                        <X size={18} className="mx-auto text-red-400" />
                      </td>
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

        {/* Cards */}
        <div className="space-y-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border-l-4"
              style={{ borderLeftColor: "#0C6038", borderTop: "1px solid #E2E8F0", borderRight: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
            >
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
