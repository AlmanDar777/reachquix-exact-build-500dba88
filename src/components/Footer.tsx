import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Product: ["Features", "CRM", "Pricing", "Integrations", "Changelog", "API Docs"],
  Company: ["About Us", "Blog", "Careers", "Press", "Contact", "Partner Program"],
  Resources: ["Help Center", "Documentation", "Email Templates", "Video Tutorials", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR Compliance", "Security"],
};

const socialIcons = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "X (Twitter)" },
  { icon: Youtube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0A1628" }} className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        {/* Top */}
        <div className="mb-12">
          <p className="font-heading text-[22px] text-white mb-2">Reachquix</p>
          <p className="font-body text-[14px]" style={{ color: "#64748B" }}>
            Outreach on autopilot. Growth on demand.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="font-body font-medium text-[14px] text-white mb-4">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-[14px] transition-colors duration-150 cursor-pointer hover:text-white"
                      style={{ color: "#64748B" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="font-body text-[12px] text-center md:text-left" style={{ color: "#64748B" }}>
            © 2026 Reachquix OÜ. All rights reserved. Registered in the Republic of Estonia, European Union · Made with ❤️ in Dubai, UAE
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150 cursor-pointer hover:text-white"
                style={{ color: "#64748B" }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* SEO hidden heading */}
        <h1 className="sr-only">Reachquix — All-in-One Sales Outreach Platform for UAE & MENA Businesses</h1>
      </div>
    </footer>
  );
};

export default Footer;
