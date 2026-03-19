import { motion } from "framer-motion";
import { Shield, Home, Users, Send, BarChart3, Mail, ArrowUp, Check, Zap, Table, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroDashboard = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const floatStyle = isMobile ? {} : { animation: "float 3s ease-in-out infinite" };
  const floatStyleDelay = (delay: string) => isMobile ? {} : { animation: `float 3s ease-in-out ${delay} infinite` };

  return (
    <div className="relative w-full max-w-[440px] mx-auto gpu-accelerated" style={{ padding: "40px 30px 50px 20px" }}>
      {/* Layer 1 — Main browser window */}
      <div className="relative z-[10] rounded-xl border border-white/20 bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden gpu-accelerated" style={floatStyle}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#F1F5F9] border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 h-5 rounded bg-white flex items-center px-2">
            <span className="font-body text-[10px] text-muted-foreground">app.reachquix.com/campaigns</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-10 bg-[#F8FAFC] border-r border-border py-2.5 flex flex-col items-center gap-2.5">
            <Home size={14} className="text-muted-foreground" />
            <Users size={14} className="text-muted-foreground" />
            <Send size={14} style={{ color: "#0C6038" }} />
            <Zap size={14} className="text-muted-foreground" />
            <BarChart3 size={14} className="text-muted-foreground" />
          </div>

          {/* Main content */}
          <div className="flex-1 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading text-[12px] text-secondary">{t("hero.dashboardTitle")}</span>
              <span className="font-body text-[9px] px-1.5 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: "#0C6038" }}>{t("hero.dashboardRunning")}</span>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[10px]" style={{ color: "#0C6038" }}>A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[10px] font-medium text-secondary truncate">{t("hero.row1Name")}</p>
                  <p className="font-body text-[8px] text-muted-foreground truncate">{t("hero.row1Subject")}</p>
                </div>
                <span className="font-body text-[8px] font-medium px-1.5 py-0.5 rounded-full text-white whitespace-nowrap" style={{ backgroundColor: "#0C6038" }}>{t("hero.row1Status")}</span>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[10px]" style={{ color: "#0C6038" }}>S</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[10px] font-medium text-secondary truncate">{t("hero.row2Name")}</p>
                  <p className="font-body text-[8px] text-muted-foreground truncate">{t("hero.row2Subject")}</p>
                </div>
                <span className="font-body text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground whitespace-nowrap">{t("hero.row2Status")}</span>
              </div>

              <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[10px]" style={{ color: "#0C6038" }}>R</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[10px] font-medium text-secondary truncate">{t("hero.row3Name")}</p>
                  <p className="font-body text-[8px] text-muted-foreground truncate">{t("hero.row3Subject")}</p>
                </div>
                <span className="font-body text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700 whitespace-nowrap">{t("hero.row3Status")}</span>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex justify-between mb-0.5">
                <span className="font-body text-[9px] text-muted-foreground">{t("hero.deliveryRate")}</span>
                <span className="font-body text-[9px] font-medium" style={{ color: "#0C6038" }}>94%</span>
              </div>
              <div className="w-full h-1 rounded-full bg-muted">
                <div className="h-1 rounded-full" style={{ width: "94%", backgroundColor: "#0C6038" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card — Reply detected (top right) */}
      <div
        className="absolute bg-white rounded-xl px-3 py-2 shadow-lg border border-border flex items-start gap-2 z-[20] gpu-accelerated"
        style={{ top: "10px", right: "-10px", transform: "rotate(-2deg)", ...floatStyleDelay("0.5s") }}
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
          <Check size={12} style={{ color: "#0C6038" }} />
        </div>
        <div>
          <p className="font-body text-[11px] font-semibold text-secondary">{t("hero.replyDetected")}</p>
          <p className="font-body text-[9px] text-muted-foreground">{t("hero.movingToCRM")}</p>
        </div>
      </div>

      {/* Card — Campaign sent (bottom left) */}
      <div
        className="absolute bg-white rounded-xl px-3 py-2 shadow-lg border border-border flex items-start gap-2 z-[20] gpu-accelerated"
        style={{ bottom: "20px", left: "-10px", ...floatStyleDelay("1s") }}
      >
        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
          <Mail size={12} style={{ color: "#0C6038" }} />
        </div>
        <div>
          <p className="font-body text-[11px] font-semibold text-secondary">{t("hero.campaignSent")}</p>
          <p className="font-body text-[9px] text-muted-foreground">{t("hero.contactsReached")}</p>
        </div>
      </div>

      {/* Card — Delivery Rate (mobile only) */}
      <div
        className="absolute bg-white rounded-xl px-3 py-2 shadow-lg border border-border text-center md:hidden z-[20] gpu-accelerated"
        style={{ top: "50%", right: "-5px", transform: "translateY(-50%)" }}
      >
        <p className="font-body text-[9px] text-muted-foreground mb-0.5">{t("hero.deliveryRate")}</p>
        <div className="flex items-center gap-1 justify-center">
          <span className="font-heading text-[20px]" style={{ color: "#0C6038" }}>94%</span>
          <ArrowUp size={12} style={{ color: "#0C6038" }} />
        </div>
      </div>

      {/* Card — Sheets Synced (top left overlap) */}
      <div
        className="hidden md:flex absolute z-[22] bg-white rounded-xl gpu-accelerated"
        style={{
          top: "5px",
          left: "-15px",
          padding: "8px 10px",
          width: "160px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          ...floatStyleDelay("0.5s"),
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#0C6038" }}>
            <Table size={13} className="text-white" />
          </div>
          <div>
            <p className="font-body text-[10px] font-semibold" style={{ color: "#0A0A0A" }}>Sheets Synced</p>
            <p className="font-body text-[8px]" style={{ color: "#64748B" }}>1,247 contacts updated</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#0C6038", animation: isMobile ? "none" : "pulse-dot 1.5s ease-in-out infinite" }} />
              <span className="font-body text-[8px] font-medium" style={{ color: "#0C6038" }}>Live sync active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card — Revenue (right side, upper) */}
      <div
        className="hidden md:block absolute z-[30] bg-white rounded-xl gpu-accelerated"
        style={{
          right: "-20px",
          top: "85px",
          padding: "8px 12px",
          width: "130px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          ...floatStyleDelay("1s"),
        }}
      >
        <p className="font-body text-[9px]" style={{ color: "#64748B" }}>Revenue</p>
        <p className="font-heading text-[20px] font-bold" style={{ color: "#0A0A0A" }}>$12,400</p>
        <div className="flex items-center gap-1">
          <ArrowUp size={10} style={{ color: "#0C6038" }} />
          <span className="font-body text-[8px] font-medium" style={{ color: "#0C6038" }}>+24% this month</span>
        </div>
        <div className="flex items-end gap-[2px] mt-1">
          {[6, 10, 8, 14, 18].map((h, i) => (
            <div key={i} className="w-2.5 rounded-sm" style={{ height: `${h}px`, backgroundColor: "#0C6038" }} />
          ))}
        </div>
      </div>

      {/* Card — AI Sequence (bottom right, below Revenue) */}
      <div
        className="hidden md:block absolute z-[25] bg-white rounded-xl gpu-accelerated"
        style={{
          bottom: "-5px",
          right: "-10px",
          padding: "8px 10px",
          width: "175px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          ...floatStyleDelay("1.5s"),
        }}
      >
        <div className="flex items-center gap-1.5 mb-1">
          <Bot size={12} style={{ color: "#0C6038" }} />
          <span className="font-body text-[10px] font-semibold" style={{ color: "#0A0A0A" }}>AI Sequence Running</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-[18px] rounded-full flex items-center gap-1 px-2" style={{ backgroundColor: "#F0FDF4" }}>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#0C6038" }} />
            <span className="font-body text-[8px] font-medium" style={{ color: "#0C6038" }}>Email 1 — Sent ✓</span>
          </div>
          <div className="h-[18px] rounded-full flex items-center gap-1 px-2" style={{ backgroundColor: "#F0FDF4" }}>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#0C6038" }} />
            <span className="font-body text-[8px] font-medium" style={{ color: "#0C6038" }}>Follow-up — Sent ✓</span>
          </div>
          <div className="h-[18px] rounded-full flex items-center gap-1 px-2" style={{ backgroundColor: "#FEF3C7" }}>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#D97706" }} />
            <span className="font-body text-[8px] font-medium" style={{ color: "#D97706" }}>Day 7 — Scheduled ⏰</span>
          </div>
        </div>
        <p className="font-body text-[8px] mt-1" style={{ color: "#94A3B8" }}>Next send in 2 days</p>
      </div>
    </div>
  );
};

// No initial/animate on hero — it's above the fold, render instantly
const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="pt-[72px] min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          <div className="flex-1 lg:w-1/2 lg:flex-none">
            <p className="section-label mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              {t("hero.label")}
            </p>
            <h1 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] leading-[1.2] tracking-[-0.02em] text-white mb-6" style={{ textWrap: "balance" } as React.CSSProperties}>
              {t("hero.title")}{" "}<br />{t("hero.titleLine2")}
            </h1>
            <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-white/85 max-w-[600px] mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#cta" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg cursor-pointer transition-all duration-200 text-center hover:shadow-lg bg-white text-primary">
                {t("hero.cta")}
              </a>
              <a href="#" className="font-body font-medium text-[15px] px-7 py-3 rounded-lg cursor-pointer transition-all duration-200 text-center border-2 border-white text-white hover:bg-white/10">
                {t("hero.demo")}
              </a>
            </div>
            <p className="font-body text-[13px] text-white/75 mb-4">
              {t("hero.trustLine")}
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <Shield size={16} />
              <span className="font-body text-[13px]">{t("hero.euRegistered")}</span>
            </div>
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
