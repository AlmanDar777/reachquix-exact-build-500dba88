import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "CRM", href: "#crm" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
  { label: "About", href: "#trust" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#") && href.length > 1) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center"
      style={{ backgroundColor: "#0C6038" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-heading text-[22px] text-white tracking-tight">
          Reachquix
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className={`font-body font-medium text-[15px] text-white/90 hover:text-white transition-colors duration-150 relative cursor-pointer ${
                activeSection === link.href.replace("#", "") ? "text-white after:scale-x-100" : ""
              }`}
              style={{
                textDecoration: "none",
              }}
            >
              {link.label}
              <span
                className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white transition-transform duration-200 origin-left"
                style={{
                  transform: activeSection === link.href.replace("#", "") ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="font-body font-medium text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer">
            Login
          </a>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); handleClick("#cta"); }}
            className="font-body font-medium text-[15px] px-6 py-2.5 rounded-lg cursor-pointer transition-all duration-200 hover:bg-reachquix-light-green/90"
            style={{ backgroundColor: "white", color: "#0C6038" }}
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[72px] left-0 right-0 flex flex-col items-center gap-6 py-8 lg:hidden"
          style={{ backgroundColor: "#0C6038" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className="font-body font-medium text-[16px] text-white cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="font-body font-medium text-[16px] text-white/90 cursor-pointer">Login</a>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); handleClick("#cta"); }}
            className="font-body font-medium text-[15px] px-8 py-3 rounded-lg cursor-pointer w-[calc(100%-48px)] text-center"
            style={{ backgroundColor: "white", color: "#0C6038" }}
          >
            Get Started Free
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
