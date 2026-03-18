import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjects = ["General Inquiry", "Sales", "Technical Support", "Partnership", "Press"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all required fields correctly.");
      return;
    }
    if (form.message.length < 20) {
      setError("Message must be at least 20 characters.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-primary">
          <div className="max-w-[1200px] mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-[32px] md:text-[48px] text-white mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
              We would love to hear from you.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-[16px] md:text-[18px] text-white/85 max-w-[600px] mx-auto">
              Whether you have a question, need help, or just want to say hello — our team is here and responds fast.
            </motion.p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/5 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail size={32} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-[22px] text-secondary mb-2">Thank you!</h3>
                    <p className="font-body text-[15px] text-muted-foreground">We received your message and will reply within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Full Name *</label>
                        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Email Address *</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Company Name</label>
                        <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Subject</label>
                        <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Message *</label>
                      <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need (min 20 characters)" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                    </div>
                    {error && <p className="font-body text-[14px] text-destructive">{error}</p>}
                    <button type="submit" className="font-body font-medium text-[15px] px-8 py-3.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                      Send Message →
                    </button>
                  </form>
                )}
              </div>

              {/* Contact info cards */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">Email</h3>
                  <a href="mailto:support@reachquix.com" className="font-body text-[15px] text-primary hover:underline">support@reachquix.com</a>
                  <p className="font-body text-[13px] text-muted-foreground mt-1">We reply within 24 hours</p>
                </div>
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">Location</h3>
                  <p className="font-body text-[15px] text-secondary">Dubai, UAE (Operations)</p>
                  <p className="font-body text-[15px] text-muted-foreground">Tallinn, Estonia (Registered Office)</p>
                </div>
                <div className="rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-[18px] text-secondary mb-2">Chat</h3>
                  <p className="font-body text-[15px] text-muted-foreground mb-2">Chat with Eva — Available 24/7 on our website</p>
                  <button className="font-body font-medium text-[14px] text-primary hover:underline">Open Chat</button>
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
