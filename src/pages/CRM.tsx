import { useState } from "react";
import { Users, Kanban, History, Bell, UsersRound, ArrowRight, CheckCircle2, BarChart3, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const features = [
  {
    icon: Kanban,
    title: "Pipeline Management",
    description: "Visual drag-and-drop pipelines to track every deal from first touch to closed-won. Customize stages, set values, and forecast revenue with confidence.",
    highlights: ["Drag-and-drop deal cards", "Custom pipeline stages", "Revenue forecasting"],
  },
  {
    icon: History,
    title: "Contact History",
    description: "Full 360° view of every interaction — emails, calls, meetings, and notes — all in one timeline. Never lose context on a conversation again.",
    highlights: ["Unified activity timeline", "Email & call logging", "Smart contact profiles"],
  },
  {
    icon: Bell,
    title: "Task Reminders",
    description: "Automated follow-up reminders so nothing slips through the cracks. Set tasks, get nudged at the right time, and stay on top of every opportunity.",
    highlights: ["Smart follow-up alerts", "Calendar integration", "Priority task queues"],
  },
  {
    icon: UsersRound,
    title: "Team Collaboration",
    description: "Assign leads, share notes, and collaborate in real-time with your entire sales team. Role-based access keeps everything organized and secure.",
    highlights: ["Lead assignment & routing", "Shared team notes", "Role-based permissions"],
  },
];

const additionalFeatures = [
  { icon: BarChart3, label: "Advanced Reporting" },
  { icon: Mail, label: "Email Integration" },
  { icon: CheckCircle2, label: "Workflow Automation" },
  { icon: ArrowRight, label: "API Access" },
];

const CRM = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert({ email: email.trim(), source: "crm" });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("You're on the list! We'll notify you when CRM launches.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary pt-[72px]">
        <div className="max-w-[700px] mx-auto px-6 py-20 md:py-28 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <Users size={32} className="text-primary-foreground" />
            </div>
            <h1 className="font-heading font-semibold text-[36px] md:text-[46px] leading-tight text-primary-foreground">
              CRM — Coming Soon
            </h1>
            <p className="font-body text-[16px] md:text-[17px] text-primary-foreground/80 max-w-[560px]">
              Our full built-in CRM with pipeline management, contact history, task reminders, and team collaboration is launching very soon. Join the waitlist to get early access.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-[440px] mt-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg px-4 text-sm font-body bg-white text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 px-6 rounded-lg font-body font-medium text-sm bg-secondary text-white hover:bg-secondary/90 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
            >
              {loading ? "Joining..." : "Join Waitlist →"}
            </button>
          </motion.form>
          <p className="text-primary-foreground/50 text-xs font-body mt-4">
            🇪🇪 Registered in the Republic of Estonia, European Union
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm font-medium text-primary tracking-widest uppercase mb-3">What's Inside</p>
            <h2 className="font-heading font-semibold text-[28px] md:text-[36px] text-foreground leading-tight">
              Everything you need to close more deals
            </h2>
            <p className="font-body text-muted-foreground text-[15px] mt-4 max-w-[500px] mx-auto">
              A powerful CRM built right into Reachquix — no switching tabs, no extra tools, no friction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-7 md:p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-[20px] text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-[14px] text-muted-foreground leading-relaxed mb-5">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 font-body text-[13px] text-foreground/80">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Strip */}
      <section className="bg-muted py-14">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-body text-sm text-muted-foreground mb-8"
          >
            Plus even more features coming at launch
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-background font-body text-[13px] font-medium text-foreground"
              >
                <f.icon size={16} className="text-primary" />
                {f.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-[500px] mx-auto px-6 text-center flex flex-col items-center gap-5">
          <h2 className="font-heading font-semibold text-[24px] md:text-[30px] text-primary-foreground">
            Be the first to try Reachquix CRM
          </h2>
          <p className="font-body text-[14px] text-primary-foreground/70">
            Early access members get exclusive onboarding support and priority feature requests.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-[420px]">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg px-4 text-sm font-body bg-white text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 px-6 rounded-lg font-body font-medium text-sm bg-secondary text-white hover:bg-secondary/90 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
            >
              {loading ? "Joining..." : "Join Waitlist →"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRM;
