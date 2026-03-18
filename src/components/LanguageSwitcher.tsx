import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧", short: "EN" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹", short: "AM" },
  { code: "ar", label: "العربية", flag: "🇸🇦", short: "AR" },
  { code: "es", label: "Español", flag: "🇪🇸", short: "ES" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱", short: "NL" },
];

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("reachquix_language", code);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 cursor-pointer transition-colors duration-150 ${
          mobile
            ? "font-body font-medium text-[16px] text-white"
            : "font-body font-medium text-[15px] text-white/90 hover:text-white"
        }`}
        aria-label="Switch language"
      >
        <Globe size={20} />
        <span>{current.short}</span>
      </button>

      {open && (
        <div
          className={`absolute ${
            mobile ? "left-1/2 -translate-x-1/2" : "ltr:right-0 rtl:left-0"
          } top-full mt-2 w-48 bg-white rounded-lg border border-border shadow-lg z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLang(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body transition-colors cursor-pointer ${
                i18n.language === lang.code
                  ? "text-primary bg-[hsl(var(--color-primary)/0.05)]"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="flex-1 text-start">{lang.label}</span>
              <span className="text-muted-foreground text-xs">{lang.short}</span>
              {i18n.language === lang.code && <Check size={16} className="text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
