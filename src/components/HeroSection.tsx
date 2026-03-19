import { motion } from "framer-motion";
import { Shield, Home, Users, Send, Repeat, Briefcase, BarChart3, Check, Mail, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroDashboard = () => {
  const floatStyle = (delay: number) => ({
    animation: `float 3.5s ease-in-out ${delay}s infinite`,
  });

  return (
    <div
      className="relative w-full max-w-[620px] mx-auto md:h-[560px] h-[400px]"
      style={{ animation: "float 3.5s ease-in-out infinite" }}
    >
      {/* WINDOW 1 — Main Dashboard */}
      <div
        className="absolute top-[40px] left-[20px] w-[340px] h-[380px] bg-white rounded-2xl z-[10] overflow-hidden hidden md:block"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)", ...floatStyle(0) }}
      >
        {/* Browser chrome */}
        <div className="h-8 bg-[#F1F5F9] rounded-t-2xl flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="ml-2 text-[10px] text-[#94A3B8]">app.reachquix.com</span>
        </div>
        <div className="flex" style={{ height: "calc(100% - 32px)" }}>
          {/* Sidebar */}
          <div className="w-12 bg-[#F8FAFC] border-r border-[#E2E8F0] pt-4 flex flex-col items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Home size={16} className="text-white" />
            </div>
            <Users size={16} className="text-[#64748B]" />
            <Send size={16} className="text-[#64748B]" />
            <Repeat size={16} className="text-[#64748B]" />
            <Briefcase size={16} className="text-[#64748B]" />
            <BarChart3 size={16} className="text-[#64748B]" />
          </div>
          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading text-[13px] font-semibold text-secondary">Active Campaigns</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary text-white font-medium">3 Running</span>
            </div>
            <div className="space-y-2">
              {[
                { bg: "bg-primary", letter: "A", name: "Ahmed Al Mansoori", sub: "Following up", badge: "Replied", badgeClass: "bg-[#F0FDF4] text-primary" },
                { bg: "bg-[#6366F1]", letter: "S", name: "Sara Khalid", sub: "Real estate partnership", badge: "Active", badgeClass: "bg-muted text-muted-foreground" },
                { bg: "bg-[#F59E0B]", letter: "R", name: "Ravi Sharma", sub: "B2B proposal", badge: "Hot Lead", badgeClass: "bg-[#FEF3C7] text-[#D97706]" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] border border-border">
                  <div className={`w-7 h-7 rounded-full ${row.bg} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-[10px] font-semibold">{row.letter}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-secondary truncate">{row.name}</p>
                    <p className="text-[10px] text-[#94A3B8] truncate">{row.sub}</p>
                  </div>
                  <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${row.badgeClass} whitespace-nowrap`}>{row.badge}</span>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <div className="flex justify-between mb-1">
                <span className="text-[10px] text-muted-foreground">Delivery Rate</span>
                <span className="text-[10px] font-medium text-primary">94%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-muted">
                <div className="h-1.5 rounded-full bg-primary" style={{ width: "94%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: simplified main card */}
      <div
        className="relative w-full bg-white rounded-2xl z-[10] overflow-hidden md:hidden"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
      >
        <div className="h-8 bg-[#F1F5F9] rounded-t-2xl flex items-center px-3 gap-2">
          <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
          <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="ml-2 text-[10px] text-[#94A3B8]">app.reachquix.com</span>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading text-[13px] font-semibold text-secondary">Active Campaigns</span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary text-white font-medium">3 Running</span>
          </div>
          {[
            { bg: "bg-primary", letter: "A", name: "Ahmed Al Mansoori", badge: "Replied", badgeClass: "bg-[#F0FDF4] text-primary" },
            { bg: "bg-[#6366F1]", letter: "S", name: "Sara Khalid", badge: "Active", badgeClass: "bg-muted text-muted-foreground" },
            { bg: "bg-[#F59E0B]", letter: "R", name: "Ravi Sharma", badge: "Hot Lead", badgeClass: "bg-[#FEF3C7] text-[#D97706]" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] border border-border mb-1.5">
              <div className={`w-7 h-7 rounded-full ${row.bg} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-[10px] font-semibold">{row.letter}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-secondary truncate">{row.name}</p>
              </div>
              <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${row.badgeClass} whitespace-nowrap`}>{row.badge}</span>
            </div>
          ))}
          <div className="mt-3">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-muted-foreground">Delivery Rate</span>
              <span className="text-[10px] font-medium text-primary">94%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-muted">
              <div className="h-1.5 rounded-full bg-primary" style={{ width: "94%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* WINDOW 2 — Email Template (desktop only) */}
      <div
        className="absolute bottom-0 -left-5 w-[200px] h-[260px] bg-white rounded-xl z-[20] overflow-hidden hidden md:block"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)", transform: "rotate(-3deg)", ...floatStyle(0.4) }}
      >
        <div className="border-b border-border py-2 text-center">
          <span className="text-[9px] font-bold text-primary tracking-wider">REACHQUIX</span>
        </div>
        <div className="p-2.5">
          <div className="h-20 rounded-md bg-[#F0FDF4] flex items-center justify-center mb-2">
            <span className="text-[9px] text-primary font-medium">Campaign Preview</span>
          </div>
          <div className="space-y-1.5 mb-3">
            <div className="h-1.5 rounded-full bg-border w-full" />
            <div className="h-1.5 rounded-full bg-border w-4/5" />
            <div className="h-1.5 rounded-full bg-border w-3/5" />
          </div>
          <div className="h-6 rounded bg-primary flex items-center justify-center mb-3">
            <span className="text-white text-[9px] font-medium">View Campaign</span>
          </div>
          <div className="border-t border-border pt-2 flex gap-2">
            <span className="text-[9px] text-[#64748B]">22,490 Delivered</span>
            <span className="text-[9px] text-[#64748B]">4,043 Opens</span>
          </div>
        </div>
      </div>

      {/* WINDOW 3 — Customer Data Card */}
      <div
        className="absolute -top-2.5 -right-2.5 md:top-[-10px] md:right-[-10px] w-[200px] md:w-[220px] bg-white rounded-xl z-[25] p-3.5"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)", ...floatStyle(0.8) }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <Users size={14} className="text-primary" />
          <span className="text-[12px] font-semibold text-secondary">Customer Data</span>
        </div>
        <p className="text-[10px] text-[#64748B] mb-2">Best customers</p>
        {[
          { bg: "bg-primary", letter: "A", name: "Ahmed Al Mansoori", badge: "Very loyal", badgeClass: "bg-[#F0FDF4] text-primary" },
          { bg: "bg-[#6366F1]", letter: "S", name: "Sara Khalid", badge: "Very loyal", badgeClass: "bg-[#F0FDF4] text-primary" },
          { bg: "bg-[#F59E0B]", letter: "R", name: "Ravi Sharma", badge: "Potential", badgeClass: "bg-[#FEF3C7] text-[#D97706]" },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 border-b border-[#F1F5F9] last:border-0">
            <div className={`w-7 h-7 rounded-full ${row.bg} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-[10px] font-semibold">{row.letter}</span>
            </div>
            <span className="text-[11px] text-secondary flex-1 truncate">{row.name}</span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${row.badgeClass} whitespace-nowrap`}>{row.badge}</span>
          </div>
        ))}
      </div>

      {/* WINDOW 4 — Revenue Chart (desktop only) */}
      <div
        className="absolute bottom-5 -right-[30px] w-[200px] bg-white rounded-xl z-[22] p-3.5 hidden md:block"
        style={{ boxShadow: "0 16px 40px rgba(0,0,0,0.15)", ...floatStyle(1.2) }}
      >
        <p className="text-[11px] text-[#64748B]">Revenue</p>
        <p className="font-heading text-[24px] font-bold text-secondary">$12,400</p>
        <div className="flex items-center gap-1 mb-2">
          <ArrowUp size={14} className="text-primary" />
          <span className="text-[11px] font-medium text-primary">+24% this month</span>
        </div>
        <div className="h-[60px] relative">
          <svg viewBox="0 0 180 60" className="w-full h-full">
            <polyline
              points="0,50 30,42 60,45 90,30 120,25 150,18 180,8"
              fill="none"
              stroke="#0C6038"
              strokeWidth="2"
            />
            <polygon
              points="0,50 30,42 60,45 90,30 120,25 150,18 180,8 180,60 0,60"
              fill="#0C6038"
              opacity="0.1"
            />
          </svg>
        </div>
      </div>

      {/* Floating Notification */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-[200px] bg-white rounded-[10px] z-[30] px-3.5 py-2.5 flex items-center gap-2.5"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)", ...floatStyle(0.2) }}
      >
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <Check size={14} className="text-white" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-secondary">Reply detected!</p>
          <p className="text-[10px] text-[#64748B]">Moving to CRM</p>
        </div>
      </motion.div>

      {/* Floating Stats Pill */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -left-2.5 top-[45%] z-[28] bg-primary rounded-full px-3.5 py-2 flex items-center gap-2 hidden md:flex"
        style={{ ...floatStyle(0.6) }}
      >
        <Mail size={14} className="text-white" />
        <span className="text-[11px] font-medium text-white whitespace-nowrap">1,247 contacts reached</span>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="pt-[72px] min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          <div className="flex-1 lg:w-1/2 lg:flex-none">
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05, ease: [0.4, 0, 0.2, 1] }} className="section-label mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              {t("hero.label")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }} className="font-heading text-[32px] md:text-[44px] lg:text-[52px] leading-[1.2] tracking-[-0.02em] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
              {t("hero.title")}{" "}<br />{t("hero.titleLine2")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }} className="font-body text-[16px] md:text-[18px] leading-[1.7] text-white/85 max-w-[600px] mb-8">
              {t("hero.subtitle")}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }} className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#cta" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg cursor-pointer transition-all duration-200 text-center hover:shadow-lg bg-white text-primary">
                {t("hero.cta")}
              </a>
              <a href="#" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg cursor-pointer transition-all duration-200 text-center border-2 border-white text-white hover:bg-white/10">
                {t("hero.demo")}
              </a>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }} className="font-body text-[13px] text-white/75 mb-4">
              {t("hero.trustLine")}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0, 0.2, 1] }} className="flex items-center gap-2 text-white/70">
              <Shield size={16} />
              <span className="font-body text-[13px]">{t("hero.euRegistered")}</span>
            </motion.div>
          </div>
          <div className="flex-1 lg:w-1/2 lg:flex-none w-full flex justify-center lg:justify-end">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
