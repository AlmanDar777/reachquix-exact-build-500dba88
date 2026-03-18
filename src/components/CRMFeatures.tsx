import { motion } from "framer-motion";
import { Contact, Kanban, Bell, BarChart3, UsersRound, Database } from "lucide-react";

const features = [
  {
    icon: Contact,
    title: "Complete Contact Management",
    desc: "Every lead lives in one organized place. See the complete history — every email sent, every reply received, every note added, every call logged. No more digging through inboxes or spreadsheets trying to remember where you left off.",
  },
  {
    icon: Kanban,
    title: "Visual Drag-and-Drop Pipeline",
    desc: "See your entire sales funnel at a glance. Drag deals from New Lead → Contacted → Replied → Meeting Booked → Proposal Sent → Closed. Know exactly where every opportunity stands and what needs attention right now.",
  },
  {
    icon: Bell,
    title: "Tasks & Smart Reminders",
    desc: "Never forget a follow-up again. Set tasks, schedule call reminders, and get notified exactly when it is time to reach out. Your entire to-do list lives inside your CRM — in the same place your leads live.",
  },
  {
    icon: BarChart3,
    title: "Client Reporting Dashboard",
    desc: "Beautiful real-time reports showing exactly how your outreach is performing. Emails sent, open rates, reply rates, deals closed, revenue generated. One-click reports you can send directly to clients — looking professional has never been easier.",
  },
  {
    icon: UsersRound,
    title: "Team Collaboration",
    desc: "Add your team, assign leads, leave internal notes, and see exactly who is working on what. No more confusion about which team member is handling which client. Everyone stays aligned, nothing gets duplicated.",
  },
  {
    icon: Database,
    title: "Zero Manual Data Entry",
    desc: "When a contact replies to your campaign, they appear in your CRM automatically — with their full email thread already attached, their sequence status updated, and their contact details filled in. You close deals. We do the admin.",
  },
];

const CRMFeatures = () => {
  return (
    <section id="crm" className="section-padding bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">BUILT-IN CRM</p>
          <h2 className="font-heading text-[26px] md:text-[38px] leading-[1.2] tracking-[-0.02em] text-reachquix-navy mb-4" style={{ textWrap: "balance" } as React.CSSProperties}>
            Stop losing leads. Start closing deals.
          </h2>
          <p className="font-body text-[16px] md:text-[18px] leading-[1.7] text-reachquix-muted-text max-w-[700px] mx-auto">
            Most businesses lose 40% of their leads simply by not following up properly. Reachquix gives you a full CRM purpose-built for outreach — so every lead is tracked, every deal is moving, and nothing falls through the cracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-xl p-6 border border-reachquix-border hover:-translate-y-1 hover:border-reachquix-green transition-all duration-200 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F0FDF4" }}>
                <f.icon size={24} style={{ color: "#0C6038" }} />
              </div>
              <h3 className="font-heading text-[18px] md:text-[22px] text-reachquix-navy mb-3">{f.title}</h3>
              <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-reachquix-muted-text">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMFeatures;
