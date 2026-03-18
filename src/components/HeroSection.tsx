import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-[72px] min-h-screen flex items-center"
      style={{ backgroundColor: "#0C6038" }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="max-w-3xl">
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
              className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg cursor-pointer transition-all duration-200 text-center hover:shadow-lg"
              style={{ backgroundColor: "white", color: "#0C6038" }}
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
      </div>
    </section>
  );
};

export default HeroSection;
