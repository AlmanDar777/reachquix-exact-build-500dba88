import { forwardRef } from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const socialIcons = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/reachquix" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/reachquix" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/reachquix" },
  {
    label: "TikTok", href: "https://www.tiktok.com/@reachquix",
    custom: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.72a8.2 8.2 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z" /></svg>),
  },
];

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const brand = t("common.brand");

  const footerLinks = {
    [t("footer.product")]: [
      { label: t("footer.features"), href: "/features" },
      { label: "Email Marketing", href: "/email-marketing" },
      { label: t("footer.crm"), href: "/crm" },
      { label: t("footer.pricing"), href: "/pricing" },
    ],
    [t("footer.company")]: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.blog"), href: "/blog" },
      { label: t("footer.contact"), href: "/contact" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.helpCenter"), href: "/help-center" },
      { label: t("footer.documentation"), href: "/docs" },
      { label: t("footer.emailTemplates"), href: "/features" },
    ],
    [t("footer.legal")]: [
      { label: t("footer.privacyPolicy"), href: "/privacy" },
      { label: t("footer.termsOfService"), href: "/terms" },
      { label: t("footer.gdprCompliance"), href: "/gdpr" },
    ],
  };

  return (
    <footer ref={ref} className="section-padding bg-secondary">
      <div className="max-w-[1200px] mx-auto">
      <div className="mb-12">
          <Link to="/" className="font-heading text-[22px] text-white mb-2 block">{brand}</Link>
          <p className="font-body text-[14px]" style={{ color: "#64748B" }}>{t("footer.tagline")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-body font-medium text-[14px] text-white mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="font-body text-[14px] transition-colors duration-150 cursor-pointer hover:text-white" style={{ color: "#64748B" }}>{link.label}</Link>
                    ) : (
                      <a href={link.href} className="font-body text-[14px] transition-colors duration-150 cursor-pointer hover:text-white" style={{ color: "#64748B" }}>{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="font-body text-[12px] text-center md:text-left" style={{ color: "#64748B" }}>{t("footer.rights")}</p>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, label, href, custom }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="min-w-[44px] min-h-[44px] flex items-center justify-center text-white transition-colors duration-200 cursor-pointer hover:text-primary">
                {custom ? custom : Icon && <Icon size={20} />}
              </a>
            ))}
          </div>
        </div>
        <h1 className="sr-only">{t("footer.srTitle")}</h1>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
