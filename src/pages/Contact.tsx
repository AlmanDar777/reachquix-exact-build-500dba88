import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const subjects = [t("contact.subjects.general"), t("contact.subjects.sales"), t("contact.subjects.technical"), t("contact.subjects.partnership"), t("contact.subjects.press")];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) { setError(t("contact.required")); return; }
    if (form.message.length < 20) { setError(t("contact.minMessage")); return; }
    await supabase.from("contact_messages").insert({ name: form.name, email: form.email, company: form.company, subject: form.subject, message: form.message });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[72px] flex-1">
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>{t("contact.title")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[600px] mx-auto">{t("contact.subtitle")}</motion.p>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/5 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Mail size={32} className="text-primary" /></div>
                    <h3 className="font-heading text-[22px] text-secondary mb-2">{t("contact.thankYou")}</h3>
                    <p className="font-body text-[15px] text-muted-foreground">{t("contact.thankYouDesc")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("contact.name")} *</label>
                        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t("contact.namePlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("contact.email")} *</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t("contact.emailPlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("contact.company")}</label>
                        <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder={t("contact.companyPlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("contact.subject")}</label>
                        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">{t("contact.message")} *</label>
                      <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t("contact.messagePlaceholder")} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                    </div>
                    {error && <p className="font-body text-[14px] text-destructive">{error}</p>}
                    <button type="submit" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">{t("contact.send")}</button>
                  </form>
                )}
              </div>
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4"><Mail size={24} className="text-primary" /></div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">{t("contact.emailTitle")}</h3>
                  <a href="mailto:support@reachquix.com" className="font-body text-[15px] text-primary hover:underline">{t("contact.emailValue")}</a>
                  <p className="font-body text-[13px] text-muted-foreground mt-1">{t("contact.emailNote")}</p>
                </div>
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4"><MapPin size={24} className="text-primary" /></div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">{t("contact.locationTitle")}</h3>
                  <p className="font-body text-[15px] text-secondary">{t("contact.locationDubai")}</p>
                  <p className="font-body text-[15px] text-muted-foreground">{t("contact.locationEstonia")}</p>
                </div>
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4"><MessageCircle size={24} className="text-primary" /></div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">{t("contact.chatTitle")}</h3>
                  <p className="font-body text-[15px] text-muted-foreground mb-2">{t("contact.chatDesc")}</p>
                  <button className="font-body font-medium text-[14px] text-primary hover:underline">{t("contact.openChat")}</button>
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

export default Contact;
