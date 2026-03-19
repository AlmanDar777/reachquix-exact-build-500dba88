import { motion } from "framer-motion";
import { Shield, Home, Users, Send, BarChart3, Mail, ArrowUp, Check, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroDashboard = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="relative w-full max-w-[580px] mx-auto lg:mx-0"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      {/* Layer 1 — Main browser window */}
      <div className="rounded-xl border border-white/20 bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F1F5F9] border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 h-6 rounded bg-white flex items-center px-3">
            <span className="font-body text-[11px] text-muted-foreground">app.reachquix.com/campaigns</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-12 bg-[#F8FAFC] border-r border-border py-3 flex flex-col items-center gap-3">
            <Home size={16} className="text-muted-foreground" />
            <Users size={16} className="text-muted-foreground" />
            <Send size={16} style={{ color: "#0C6038" }} />
            <Zap size={16} className="text-muted-foreground" />
            <BarChart3 size={16} className="text-muted-foreground" />
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-heading text-[14px] text-secondary">{t("hero.dashboardTitle")}</span>
              <span className="font-body text-[11px] px-2 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: "#0C6038" }}>{t("hero.dashboardRunning")}</span>
            </div>

            {/* Contact rows */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[11px]" style={{ color: "#0C6038" }}>A</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[12px] font-medium text-secondary truncate">{t("hero.row1Name")}</p>
                  <p className="font-body text-[10px] text-muted-foreground truncate">{t("hero.row1Subject")}</p>
                </div>
                <span className="font-body text-[10px] font-medium px-2 py-0.5 rounded-full text-white whitespace-nowrap" style={{ backgroundColor: "#0C6038" }}>{t("hero.row1Status")}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[11px]" style={{ color: "#0C6038" }}>S</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[12px] font-medium text-secondary truncate">{t("hero.row2Name")}</p>
                  <p className="font-body text-[10px] text-muted-foreground truncate">{t("hero.row2Subject")}</p>
                </div>
                <span className="font-body text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground whitespace-nowrap">{t("hero.row2Status")}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#F8FAFC] border border-border">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
                  <span className="font-heading text-[11px]" style={{ color: "#0C6038" }}>R</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[12px] font-medium text-secondary truncate">{t("hero.row3Name")}</p>
                  <p className="font-body text-[10px] text-muted-foreground truncate">{t("hero.row3Subject")}</p>
                </div>
                <span className="font-body text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 whitespace-nowrap">{t("hero.row3Status")}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="flex justify-between mb-1">
                <span className="font-body text-[10px] text-muted-foreground">{t("hero.deliveryRate")}</span>
                <span className="font-body text-[10px] font-medium" style={{ color: "#0C6038" }}>94%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-muted">
                <div className="h-1.5 rounded-full" style={{ width: "94%", backgroundColor: "#0C6038" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 — Floating notification card top right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-xl px-4 py-3 shadow-lg border border-border flex items-start gap-2.5"
        style={{ animation: "float 3s ease-in-out 0.5s infinite", transform: "rotate(-2deg)" }}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
          <Check size={14} style={{ color: "#0C6038" }} />
        </div>
        <div>
          <p className="font-body text-[12px] font-semibold text-secondary">{t("hero.replyDetected")}</p>
          <p className="font-body text-[10px] text-muted-foreground">{t("hero.movingToCRM")}</p>
        </div>
      </motion.div>

      {/* Layer 3 — Floating stats card bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl px-4 py-3 shadow-lg border border-border flex items-start gap-2.5"
        style={{ animation: "float 3s ease-in-out 1s infinite" }}
      >
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(12,96,56,0.1)" }}>
          <Mail size={14} style={{ color: "#0C6038" }} />
        </div>
        <div>
          <p className="font-body text-[12px] font-semibold text-secondary">{t("hero.campaignSent")}</p>
          <p className="font-body text-[10px] text-muted-foreground">{t("hero.contactsReached")}</p>
        </div>
      </motion.div>

      {/* Layer 4 — Floating metric card middle right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute top-1/2 -right-6 lg:-right-12 bg-white rounded-xl px-4 py-3 shadow-lg border border-border text-center"
        style={{ animation: "float 3s ease-in-out 1.5s infinite", transform: "translateY(-50%)" }}
      >
        <p className="font-body text-[10px] text-muted-foreground mb-0.5">{t("hero.deliveryRate")}</p>
        <div className="flex items-center gap-1 justify-center">
          <span className="font-heading text-[22px]" style={{ color: "#0C6038" }}>94%</span>
          <ArrowUp size={14} style={{ color: "#0C6038" }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="pt-[72px] min-h-screen flex items-center bg-primary">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
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
          <div className="flex-1 w-full">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
