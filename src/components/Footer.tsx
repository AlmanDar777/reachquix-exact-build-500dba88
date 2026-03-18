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
  {
    label: "Snapchat", href: "https://www.snapchat.com/add/reachquix",
    custom: (<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.502.075.045.203.09.401.09.3-.016.659-.12.953-.263a.534.534 0 01.209-.042c.148 0 .301.042.44.117.18.09.32.232.32.391a.565.565 0 01-.292.496 4.57 4.57 0 01-.75.334c-.202.083-.478.198-.676.31-.395.222-.514.496-.514.663 0 .18.06.33.15.456a8.44 8.44 0 001.547 1.78c.573.538 1.236.958 1.97 1.252.142.057.209.12.229.168.034.084-.036.198-.116.283-.161.167-.432.285-.699.377a5.37 5.37 0 01-.675.177c-.108.025-.219.063-.233.107-.014.045.012.107.069.177.038.048.084.095.123.134a.555.555 0 01.134.27c.013.098-.01.181-.079.263-.108.127-.325.212-.599.263-.232.043-.494.063-.762.107a2.39 2.39 0 00-.49.117c-.247.103-.472.337-.698.58-.416.449-.887.958-1.83.958-.04 0-.082-.003-.124-.003-.91.003-1.374-.506-1.789-.955-.226-.243-.451-.477-.698-.58a2.37 2.37 0 00-.489-.117c-.267-.044-.53-.064-.761-.107-.274-.05-.491-.136-.6-.263-.068-.082-.09-.165-.078-.263a.555.555 0 01.134-.27c.04-.04.084-.086.123-.134.057-.07.083-.132.069-.177-.015-.044-.126-.082-.234-.107a5.37 5.37 0 01-.674-.177c-.267-.092-.538-.21-.7-.377-.079-.085-.149-.199-.115-.283.02-.048.087-.11.228-.168a7.03 7.03 0 001.97-1.253 8.38 8.38 0 001.548-1.779c.09-.127.15-.277.15-.456 0-.167-.12-.441-.514-.663a4.66 4.66 0 00-.676-.31 4.57 4.57 0 01-.75-.334.565.565 0 01-.293-.496c0-.16.14-.301.32-.39.14-.076.293-.118.44-.118a.52.52 0 01.21.042c.293.142.653.263.952.263.198 0 .326-.045.401-.09a9.39 9.39 0 01-.034-.563c-.104-1.627-.23-3.654.3-4.846C7.86 1.069 11.216.793 12.206.793z" /></svg>),
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = {
    [t("footer.product")]: [
      { label: t("footer.features"), href: "/features" },
      { label: t("footer.crm"), href: "/#crm" },
      { label: t("footer.pricing"), href: "/pricing" },
      { label: t("footer.integrations"), href: "/features" },
      { label: t("footer.changelog"), href: "#" },
      { label: t("footer.apiDocs"), href: "#" },
    ],
    [t("footer.company")]: [
      { label: t("footer.aboutUs"), href: "/about" },
      { label: t("footer.blog"), href: "/blog" },
      { label: t("footer.careers"), href: "#" },
      { label: t("footer.press"), href: "#" },
      { label: t("footer.contact"), href: "/contact" },
      { label: t("footer.partnerProgram"), href: "#" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.helpCenter"), href: "#" },
      { label: t("footer.documentation"), href: "#" },
      { label: t("footer.emailTemplates"), href: "#" },
      { label: t("footer.videoTutorials"), href: "#" },
      { label: t("footer.community"), href: "#" },
    ],
    [t("footer.legal")]: [
      { label: t("footer.privacyPolicy"), href: "#" },
      { label: t("footer.termsOfService"), href: "#" },
      { label: t("footer.cookiePolicy"), href: "#" },
      { label: t("footer.gdprCompliance"), href: "#" },
      { label: t("footer.security"), href: "#" },
    ],
  };

  return (
    <footer className="section-padding bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <p className="font-heading text-[22px] text-white mb-2">Reachquix</p>
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
        <h1 className="sr-only">Reachquix — All-in-One Sales Outreach Platform for UAE & MENA Businesses</h1>
      </div>
    </footer>
  );
};

export default Footer;
