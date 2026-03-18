import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Import Your Contacts",
    desc: "Connect your Google Sheet in seconds. Reachquix reads your contact names, email addresses, and any custom columns automatically. Add thousands of contacts at once — your list is live and ready instantly. No CSV. No copy-paste. No headaches.",
  },
  {
    num: "02",
    title: "Build Your Sequence",
    desc: "Write your initial email and follow-ups using our AI-powered template editor. Set the perfect send timing — Day 2, Day 4, Day 7, and beyond. Personalize every message automatically with {{FirstName}}, {{Company}}, and custom variables that make every email feel hand-written.",
  },
  {
    num: "03",
    title: "Launch & Let It Run",
    desc: "Hit send once and Reachquix takes over completely. Emails go out on schedule. Follow-ups fire automatically. Replies are detected in real time. Sequences pause the moment someone responds. Your Google Sheet updates itself. You do nothing — except watch the replies come in.",
  },
  {
    num: "04",
    title: "Manage & Close",
    desc: "Every reply lands directly in your built-in CRM with the full conversation attached. Move leads through your pipeline, add notes, set follow-up reminders, assign to team members, and close deals — all without ever leaving Reachquix.",
  },
];

const HowItWorks = () => {
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
          <p className="section-label mb-4">HOW IT WORKS</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            From cold contact to closed deal — in 4 simple steps
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[600px] mx-auto">
            No technical skills required. No complicated setup. Just connect, write, launch, and close.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 relative">
                  <span
                    className="font-heading text-[80px] leading-none absolute -top-4 -left-2 select-none"
                    style={{ color: "rgba(12, 96, 56, 0.15)" }}
                  >
                    {step.num}
                  </span>
                  <div className="pt-16">
                    <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-4">{step.title}</h3>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{step.desc}</p>
                  </div>
                </div>
                <div className="flex-1 w-full rounded-xl border border-reachquix-border bg-reachquix-gray-bg h-[200px] md:h-[280px] flex items-center justify-center">
                  <span className="font-body text-reachquix-muted-text text-[14px]">Product Screenshot</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
