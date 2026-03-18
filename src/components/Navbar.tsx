import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "CRM", href: "/#crm" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  const renderLink = (link: { label: string; href: string }, mobile = false) => {
    const baseClass = mobile
      ? "font-body font-medium text-[16px] text-white cursor-pointer"
      : `font-body font-medium text-[15px] text-white/90 hover:text-white transition-colors duration-150 relative cursor-pointer ${isActive(link.href) ? "text-white" : ""}`;

    if (link.href.startsWith("/#")) {
      if (location.pathname === "/") {
        return (
          <a
            key={link.label}
            href={link.href.replace("/", "")}
            onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
            className={baseClass}
          >
            {link.label}
            {!mobile && (
              <span
                className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white transition-transform duration-200 origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            )}
          </a>
        );
      }
      return (
        <Link key={link.label} to={link.href} className={baseClass}>
          {link.label}
        </Link>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        onClick={() => setMobileOpen(false)}
        className={baseClass}
      >
        {link.label}
        {!mobile && (
          <span
            className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-white transition-transform duration-200 origin-left"
            style={{ transform: isActive(link.href) ? "scaleX(1)" : "scaleX(0)" }}
          />
        )}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[1000] h-[72px] flex items-center bg-primary"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-[22px] text-white tracking-tight">
          Reachquix
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login" className="font-body font-medium text-[15px] text-white/90 hover:text-white transition-colors cursor-pointer">
            Login
          </Link>
          <Link
            to="/signup"
            className="font-body font-medium text-[15px] px-6 py-2.5 rounded-lg cursor-pointer transition-all duration-200 bg-white text-primary hover:bg-white/90"
          >
            Get Started Free
          </Link>
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
          className="absolute top-[72px] left-0 right-0 flex flex-col items-center gap-6 py-8 lg:hidden bg-primary"
        >
          {navLinks.map((link) => renderLink(link, true))}
          <Link to="/login" onClick={() => setMobileOpen(false)} className="font-body font-medium text-[16px] text-white/90 cursor-pointer">Login</Link>
          <Link
            to="/signup"
            onClick={() => setMobileOpen(false)}
            className="font-body font-medium text-[15px] px-8 py-3 rounded-lg cursor-pointer w-[calc(100%-48px)] text-center bg-white text-primary"
          >
            Get Started Free
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
