import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const HeroDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
    className="relative w-full max-w-[580px] mx-auto lg:mx-0"
  >
    {/* Main dashboard card */}
    <div
      className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm p-5 shadow-2xl"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 h-6 rounded bg-muted flex items-center px-3">
          <span className="font-body text-[11px] text-muted-foreground">app.reachquix.com/campaigns</span>
        </div>
      </div>
      {/* Campaign list */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-heading text-[14px] text-secondary">Active Campaigns</span>
          <span className="font-body text-[12px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">3 Running</span>
        </div>
        {[
          { name: "Ahmed Al Mansoori", subject: "Following up on our conversation", status: "Replied", statusColor: "bg-primary text-white" },
          { name: "Sara Khalid", subject: "Dubai real estate partnership", status: "Sequence Active", statusColor: "bg-primary/10 text-primary" },
          { name: "Ravi Sharma", subject: "B2B tech proposal follow-up", status: "Hot Lead", statusColor: "bg-orange-100 text-orange-700" },
        ].map((row) => (
          <div key={row.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/50 border border-border">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-heading text-[12px] text-primary">{row.name[0]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-[13px] font-medium text-secondary truncate">{row.name}</p>
              <p className="font-body text-[11px] text-muted-foreground truncate">{row.subject}</p>
            </div>
            <span className={`font-body text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${row.statusColor}`}>
              {row.status}
            </span>
          </div>
        ))}
        {/* Progress bar */}
        <div className="mt-2">
          <div className="flex justify-between mb-1">
            <span className="font-body text-[11px] text-muted-foreground">Delivery Rate</span>
            <span className="font-body text-[11px] font-medium text-primary">94%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-muted">
            <div className="h-2 rounded-full bg-primary" style={{ width: "94%" }} />
          </div>
        </div>
      </div>
    </div>

    {/* Floating notification cards */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-xl px-4 py-3 shadow-lg border border-border"
      style={{ animation: "float 3s ease-in-out 0.5s infinite" }}
    >
      <p className="font-body text-[12px] font-medium text-primary">✓ Reply detected!</p>
      <p className="font-body text-[10px] text-muted-foreground">Moving to CRM automatically</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl px-4 py-3 shadow-lg border border-border"
      style={{ animation: "float 3s ease-in-out 1s infinite" }}
    >
      <p className="font-body text-[12px] font-medium text-secondary">Campaign sent</p>
      <p className="font-body text-[10px] text-muted-foreground">1,247 contacts reached</p>
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-[72px] min-h-screen flex items-center bg-primary"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="section-label mb-4"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              ALL-IN-ONE SALES OUTREACH PLATFORM
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="font-heading text-[32px] md:text-[44px] lg:text-[52px] leading-[1.2] tracking-[-0.02em] text-white mb-6"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Send. Follow Up. Close.{" "}
              <br />
              All on Autopilot.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="font-body text-[16px] md:text-[18px] leading-[1.7] text-white/85 max-w-[600px] mb-8"
            >
              Reachquix is the all-in-one outreach platform that sends your cold emails, follows up at exactly the right time, detects every reply instantly, and manages your leads in a built-in CRM — so you can stop chasing and start closing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-6"
            >
              <a
                href="#cta"
                className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg cursor-pointer transition-all duration-200 text-center hover:shadow-lg bg-white text-primary"
              >
                Get Started Free →
              </a>
              <a
                href="#"
                className="font-body font-medium text-[15px] px-7 py-3 rounded-lg cursor-pointer transition-all duration-200 text-center border-2 border-white text-white hover:bg-white/10"
              >
                Watch Demo
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="font-body text-[13px] text-white/75 mb-4"
            >
              No credit card required
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className="flex items-center gap-2 text-white/70"
            >
              <Shield size={16} />
              <span className="font-body text-[13px]">
                Registered in the Republic of Estonia, European Union
              </span>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="flex-1 w-full">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
