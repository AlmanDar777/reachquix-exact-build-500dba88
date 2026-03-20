import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Check, ChevronRight, Rocket, Table, Server, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const badges = [
  { icon: Shield, label: "EU Registered" },
  { icon: Check, label: "GDPR Compliant" },
  { icon: Shield, label: "Data Protected" },
];

const toc = [
  { id: "quickstart", label: "1. Quick Start Guide", icon: Rocket },
  { id: "sheets", label: "2. Google Sheets Integration", icon: Table },
  { id: "smtp", label: "3. SMTP Setup Guide", icon: Server },
  { id: "api", label: "4. API Reference", icon: Code },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("quickstart");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4">Documentation</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 mb-8">Everything you need to set up and use Reachquix.</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-3">
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 font-body text-[13px] font-medium">
                  <badge.icon size={14} />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar TOC */}
              <nav className="lg:w-[250px] flex-shrink-0">
                <h3 className="font-heading text-[16px] text-secondary mb-4">Table of Contents</h3>
                <div className="space-y-1">
                  {toc.map((item) => (
                    <button key={item.id} onClick={() => scrollTo(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-[14px] text-left transition-colors cursor-pointer ${activeSection === item.id ? "bg-primary/5 text-primary font-medium" : "text-muted-foreground hover:bg-muted"}`}>
                      <item.icon size={16} />
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div id="quickstart" className="mb-16">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-4">1. Quick Start Guide</h2>
                    <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-8">Get from zero to your first campaign in under 5 minutes.</p>
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Create Your Account", desc: "Sign up at reachquix.com — takes under 60 seconds. No credit card required." },
                        { step: "2", title: "Connect Your Google Sheet", desc: "Click 'Import Contacts' and authorize your Google account. Select the sheet with your contact list." },
                        { step: "3", title: "Create Your Email Template", desc: "Use our AI writer or write your own. Add personalization variables like {{FirstName}} and {{Company}}." },
                        { step: "4", title: "Launch Your Campaign", desc: "Set your send schedule, review your sequence, and hit 'Launch'. Your campaign runs on autopilot." },
                      ].map((s, i) => (
                        <div key={i} className="flex gap-4 p-5 rounded-xl border border-border">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-heading text-[16px] text-primary">{s.step}</span>
                          </div>
                          <div>
                            <h3 className="font-heading text-[16px] text-secondary mb-1">{s.title}</h3>
                            <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div id="sheets" className="mb-16">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-4">2. Google Sheets Integration</h2>
                    <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6">Connect your Google Sheet to import contacts directly into Reachquix. Your data stays in sync — any changes you make in your sheet are reflected automatically.</p>
                    <div className="bg-muted rounded-xl p-6 border border-border mb-6">
                      <h4 className="font-heading text-[16px] text-secondary mb-3">Required Columns</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2"><Check size={16} className="text-primary" /><span className="font-body text-[14px] text-secondary"><strong>Name</strong> — Contact's full name</span></div>
                        <div className="flex items-center gap-2"><Check size={16} className="text-primary" /><span className="font-body text-[14px] text-secondary"><strong>Email</strong> — Contact's email address</span></div>
                      </div>
                      <h4 className="font-heading text-[16px] text-secondary mt-4 mb-3">Optional Columns</h4>
                      <p className="font-body text-[14px] text-muted-foreground">Company, Job Title, City, Phone, or any custom column you want to use as a personalization variable in your emails.</p>
                    </div>
                    <div className="bg-muted rounded-xl p-6 border border-border">
                      <h4 className="font-heading text-[16px] text-secondary mb-3">Sync Settings</h4>
                      <p className="font-body text-[14px] leading-[1.7] text-muted-foreground">By default, Reachquix checks your Google Sheet for updates every 15 minutes. New contacts added to your sheet are automatically included in active campaigns. Removed contacts are automatically excluded.</p>
                    </div>
                  </motion.div>
                </div>

                <div id="smtp" className="mb-16">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-4">3. SMTP Setup Guide</h2>
                    <p className="font-body text-[15px] leading-[1.8] text-muted-foreground mb-6">Connect your own mail server to send emails through your domain. This keeps your sender reputation strong and avoids shared blacklists.</p>
                    <div className="space-y-4">
                      {[
                        { title: "Namecheap Private Email", fields: "Host: mail.privateemail.com | Port: 465 | SSL: Yes" },
                        { title: "Gmail / Google Workspace", fields: "Host: smtp.gmail.com | Port: 587 | TLS: Yes | Note: Enable App Passwords" },
                        { title: "Any SMTP Server", fields: "Enter your Host, Port, Username, Password, and SSL/TLS settings from your email provider." },
                      ].map((provider, i) => (
                        <div key={i} className="rounded-xl border border-border p-5">
                          <h4 className="font-heading text-[16px] text-secondary mb-2 flex items-center gap-2"><ChevronRight size={16} className="text-primary" />{provider.title}</h4>
                          <p className="font-body text-[13px] text-muted-foreground font-mono bg-muted rounded-lg px-3 py-2">{provider.fields}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div id="api" className="mb-16">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="font-heading text-[26px] md:text-[34px] text-secondary mb-4">4. API Reference</h2>
                    <div className="rounded-xl border border-border p-8 text-center">
                      <span className="font-body text-[12px] font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-700 mb-4 inline-block">Coming Soon</span>
                      <h3 className="font-heading text-[20px] text-secondary mb-3">API Access for Developers</h3>
                      <p className="font-body text-[15px] text-muted-foreground max-w-[500px] mx-auto">Our REST API is currently in development. It will provide programmatic access to campaigns, contacts, templates, and CRM data. Available on the Agency plan.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Docs;
