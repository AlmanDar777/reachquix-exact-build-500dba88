import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMobileAnimation } from "@/hooks/useMobileAnimation";

const StepMockup = ({ mockup }: { mockup: { title: string; rows?: { name: string; email: string; status: string }[]; steps?: string[]; stats?: { label: string; value: string }[]; stages?: string[] } }) => (
  <div className="w-full rounded-xl border border-border bg-white overflow-hidden shadow-sm">
    <div className="flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      <span className="ml-2 font-body text-[11px] text-muted-foreground">{mockup.title}</span>
    </div>
    <div className="p-4">
      {mockup.rows && (
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
      {mockup.steps && (
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
      {mockup.stats && (
        <div className="grid grid-cols-3 gap-3">
          {mockup.stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50">
              <p className="font-heading text-[20px] text-primary">{stat.value}</p>
              <p className="font-body text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
      {mockup.stages && (
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
  const { t } = useTranslation();
  const { getSectionAnimation, isMobile } = useMobileAnimation();
  const steps = [
    {
      num: "01", title: t("howItWorks.step1Title"), desc: t("howItWorks.step1Desc"),
      mockup: { title: t("howItWorks.step1Mockup"), rows: [
        { name: "Ahmed Al Mansoori", email: "ahmed@example.ae", status: "Imported" },
        { name: "Sara Khalid", email: "sara@agency.ae", status: "Imported" },
        { name: "Ravi Sharma", email: "ravi@tech.com", status: "Syncing..." },
      ]},
    },
    {
      num: "02", title: t("howItWorks.step2Title"), desc: t("howItWorks.step2Desc"),
      mockup: { title: t("howItWorks.step2Mockup"), steps: ["Day 1: Initial outreach", "Day 3: Follow-up #1", "Day 7: Final follow-up"] },
    },
    {
      num: "03", title: t("howItWorks.step3Title"), desc: t("howItWorks.step3Desc"),
      mockup: { title: t("howItWorks.step3Mockup"), stats: [{ label: "Sent", value: "1,247" }, { label: "Opened", value: "834" }, { label: "Replied", value: "127" }] },
    },
    {
      num: "04", title: t("howItWorks.step4Title"), desc: t("howItWorks.step4Desc"),
      mockup: { title: t("howItWorks.step4Mockup"), stages: ["New Lead", "Contacted", "Meeting Booked", "Closed"] },
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...getSectionAnimation()} className="text-center mb-16">
          <p className="section-label mb-4">{t("howItWorks.label")}</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-secondary mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("howItWorks.title")}</h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground max-w-[600px] mx-auto">{t("howItWorks.subtitle")}</p>
        </motion.div>
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, ...(isMobile ? {} : { x: isEven ? -40 : 40 }) }}
                whileInView={{ opacity: 1, ...(isMobile ? {} : { x: 0 }) }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: isMobile ? 0.3 : 0.5, ease: [0.4, 0, 0.2, 1] }}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 gpu-accelerated ${!isEven ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 relative">
                  <span className="font-heading text-[80px] leading-none absolute -top-4 -left-2 select-none" style={{ color: "rgba(12, 96, 56, 0.15)" }}>{step.num}</span>
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
