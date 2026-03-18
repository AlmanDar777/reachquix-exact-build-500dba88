import { useCountUp } from "@/hooks/useCountUp";

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
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-y md:divide-y-0 divide-reachquix-border">
        <StatItem end={10000} suffix="+" label="Emails Sent Daily" />
        <StatItem end={3500} suffix="+" label="Leads Managed" />
        <StatItem end={94} suffix="%" label="Average Reply Detection Rate" />
      </div>
    </section>
  );
};

export default StatsBar;
