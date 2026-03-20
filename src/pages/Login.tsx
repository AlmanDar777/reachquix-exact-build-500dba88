import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Sheet, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [showPw, setShowPw] = useState(false);

  const benefits = [
    { icon: Sheet, text: t("login.benefit1") },
    { icon: Users, text: t("login.benefit2") },
    { icon: Zap, text: t("login.benefit3") },
  ];

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center px-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="font-heading text-[22px] text-white tracking-tight mb-8 block">Reachquix</Link>
          <h2 className="font-heading text-[32px] text-white mb-4 leading-tight" style={{ whiteSpace: "pre-line" }}>
            {t("login.panelTitle")}
          </h2>
          <div className="space-y-4 mt-8">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <b.icon size={20} className="text-white" />
                </div>
                <span className="font-body text-[16px] text-white/90">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[400px] w-full py-12">
          <Link to="/" className="font-heading text-[22px] text-primary tracking-tight mb-6 block lg:hidden">Reachquix</Link>
          <h1 className="font-heading text-[32px] md:text-[40px] text-secondary mb-2">{t("login.welcomeBack")}</h1>
          <p className="font-body text-[15px] text-muted-foreground mb-8">{t("login.loginSubtitle")}</p>
          <div className="space-y-4">
            <div>
              <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("login.email")}</label>
              <input type="email" placeholder={t("login.emailPlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("login.password")}</label>
              <div className="relative">
                <input type={showPw ? "text" : "password"} placeholder={t("login.passwordPlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary pr-12" />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary min-w-[44px] min-h-[44px] flex items-center justify-center">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                <span className="font-body text-[14px] text-secondary">{t("login.remember")}</span>
              </label>
              <a href="#" className="font-body text-[14px] text-primary hover:underline">{t("login.forgot")}</a>
            </div>
            <button className="w-full py-3 rounded-lg font-body font-medium text-[15px] text-white bg-primary hover:bg-primary/90 transition-colors min-h-[48px]">
              {t("login.submit")}
            </button>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center"><span className="bg-white px-4 font-body text-[13px] text-muted-foreground">{t("login.or")}</span></div>
            </div>
            <button className="w-full py-3 rounded-lg font-body font-medium text-[15px] text-secondary border-2 border-border hover:bg-muted transition-colors flex items-center justify-center gap-2 min-h-[48px]">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              {t("login.google")}
            </button>
          </div>
          <p className="font-body text-[14px] text-muted-foreground mt-6 text-center">
            {t("login.noAccount")}{" "}
            <Link to="/signup" className="text-primary font-medium hover:underline">{t("login.signupLink")}</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
