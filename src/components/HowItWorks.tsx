import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Import Your Contacts",
    desc: "Connect your Google Sheet in seconds. Reachquix reads your contact names, email addresses, and any custom columns automatically. Add thousands of contacts at once — your list is live and ready instantly. No CSV. No copy-paste. No headaches.",
    mockup: {
      title: "Import from Google Sheets",
      rows: [
        { name: "Ahmed Al Mansoori", email: "ahmed@example.ae", status: "Imported" },
        { name: "Sara Khalid", email: "sara@agency.ae", status: "Imported" },
        { name: "Ravi Sharma", email: "ravi@tech.com", status: "Syncing..." },
      ],
    },
  },
  {
    num: "02",
    title: "Build Your Sequence",
    desc: "Write your initial email and follow-ups using our AI-powered template editor. Set the perfect send timing — Day 2, Day 4, Day 7, and beyond. Personalize every message automatically with {{FirstName}}, {{Company}}, and custom variables that make every email feel hand-written.",
    mockup: {
      title: "Template Editor",
      steps: ["Day 1: Initial outreach", "Day 3: Follow-up #1", "Day 7: Final follow-up"],
    },
  },
  {
    num: "03",
    title: "Launch & Let It Run",
    desc: "Hit send once and Reachquix takes over completely. Emails go out on schedule. Follow-ups fire automatically. Replies are detected in real time. Sequences pause the moment someone responds. Your Google Sheet updates itself. You do nothing — except watch the replies come in.",
    mockup: {
      title: "Campaign Dashboard",
      stats: [
        { label: "Sent", value: "1,247" },
        { label: "Opened", value: "834" },
        { label: "Replied", value: "127" },
      ],
    },
  },
  {
    num: "04",
    title: "Manage & Close",
    desc: "Every reply lands directly in your built-in CRM with the full conversation attached. Move leads through your pipeline, add notes, set follow-up reminders, assign to team members, and close deals — all without ever leaving Reachquix.",
    mockup: {
      title: "Sales Pipeline",
      stages: ["New Lead", "Contacted", "Meeting Booked", "Closed"],
    },
  },
];

const StepMockup = ({ mockup }: { mockup: typeof steps[0]["mockup"] }) => (
  <div className="w-full rounded-xl border border-border bg-white overflow-hidden shadow-sm">
    {/* Browser chrome */}
    <div className="flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      <span className="ml-2 font-body text-[11px] text-muted-foreground">{mockup.title}</span>
    </div>
    <div className="p-4">
      {"rows" in mockup && (
        <div className="space-y-2">
          {mockup.rows.map((row) => (
            <div key={row.name} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-[11px] text-primary">{row.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-[12px] font-medium text-secondary truncate">{row.name}</p>
                <p className="font-body text-[10px] text-muted-foreground">{row.email}</p>
              </div>
              <span className="font-body text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{row.status}</span>
            </div>
          ))}
        </div>
      )}
      {"steps" in mockup && mockup.steps && (
        <div className="space-y-2">
          {mockup.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="font-body text-[10px] text-white font-medium">{i + 1}</span>
              </div>
              <span className="font-body text-[12px] text-secondary">{step}</span>
            </div>
          ))}
        </div>
      )}
      {"stats" in mockup && mockup.stats && (
        <div className="grid grid-cols-3 gap-3">
          {mockup.stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50">
              <p className="font-heading text-[20px] text-primary">{stat.value}</p>
              <p className="font-body text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      {"stages" in mockup && mockup.stages && (
        <div className="flex gap-2">
          {mockup.stages.map((stage, i) => (
            <div key={stage} className="flex-1 p-2 rounded-lg border border-border text-center">
              <div className={`w-3 h-3 rounded-full mx-auto mb-1.5 ${i === 3 ? "bg-primary" : "bg-primary/30"}`} />
              <p className="font-body text-[10px] text-secondary">{stage}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

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
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-secondary mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            From cold contact to closed deal — in 4 simple steps
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground max-w-[600px] mx-auto">
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
                    <h3 className="font-heading text-[18px] md:text-[22px] text-secondary mb-4">{step.title}</h3>
                    <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <StepMockup mockup={step.mockup} />
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
