import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const logos = [
  "Freshworks", "Pipedrive", "Calendly", "Typeform", "Hotjar",
  "Intercom", "Drift", "Clearbit", "Apollo.io", "Lemlist"
];

const LogoBar = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-white border-b border-reachquix-border/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-6">
        <p className="font-body text-[13px] text-reachquix-muted-text text-center">
          {t("logoBar.trusted")}
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="font-heading text-[18px] text-reachquix-navy/30 select-none flex-shrink-0">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
