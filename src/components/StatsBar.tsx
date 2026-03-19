import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "react-i18next";

const StatItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center py-6 md:py-0">
      <p className="font-heading text-[32px] md:text-[48px] tabular-nums" style={{ color: "#0C6038" }}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className="font-body text-[15px] text-reachquix-muted-text mt-1">{label}</p>
    </div>
  );
};

const StatsBar = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-y md:divide-y-0 divide-reachquix-border">
        <StatItem end={8247} suffix="+" label={t("stats.emailsSent")} />
        <StatItem end={2891} suffix="+" label={t("stats.leadsManaged")} />
        <StatItem end={98.4} suffix="%" label={t("stats.replyRate")} />
      </div>
    </section>
  );
};

export default StatsBar;
