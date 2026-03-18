import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, ArrowLeft } from "lucide-react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  is_read: boolean;
  is_replied: boolean;
  created_at: string;
}

const AdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [selected, setSelected] = useState<ContactMessage | null>(null);

  const loadMessages = async () => {
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    setMessages((data as ContactMessage[]) || []);
  };

  useEffect(() => { loadMessages(); }, []);

  const markAs = async (id: string, field: "is_read" | "is_replied", value: boolean) => {
    await supabase.from("contact_messages").update({ [field]: value }).eq("id", id);
    loadMessages();
    if (selected?.id === id) setSelected({ ...selected, [field]: value });
  };

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 cursor-pointer">
          <ArrowLeft size={18} /> Back to Messages
        </button>
        <div className="bg-card rounded-xl border border-border p-6 max-w-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl text-foreground">{selected.subject}</h2>
            <div className="flex gap-2">
              {!selected.is_read && (
                <button onClick={() => markAs(selected.id, "is_read", true)} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary cursor-pointer">Mark as Read</button>
              )}
              {!selected.is_replied && (
                <button onClick={() => markAs(selected.id, "is_replied", true)} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary cursor-pointer">Mark as Replied</button>
              )}
            </div>
          </div>
          <div className="space-y-2 text-sm mb-4">
            <p><span className="text-muted-foreground">From:</span> {selected.name} ({selected.email})</p>
            {selected.company && <p><span className="text-muted-foreground">Company:</span> {selected.company}</p>}
            <p><span className="text-muted-foreground">Date:</span> {new Date(selected.created_at).toLocaleString()}</p>
          </div>
          <div className="bg-muted rounded-lg p-4 text-sm text-foreground whitespace-pre-wrap">{selected.message}</div>
          <a
            href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
            className="inline-flex items-center gap-2 mt-4 h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail size={16} /> Reply via Email
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-heading text-2xl text-foreground mb-6">Contact Messages</h1>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Name</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Subject</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m.id} onClick={() => setSelected(m)} className="border-t border-border cursor-pointer hover:bg-muted/50">
                <td className={`px-4 py-3 ${!m.is_read ? "font-semibold text-foreground" : "text-foreground"}`}>{m.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{m.email}</td>
                <td className="px-4 py-3 text-muted-foreground">{m.subject}</td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(m.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3">
                  {m.is_replied ? (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Replied</span>
                  ) : m.is_read ? (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">Read</span>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">New</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {messages.length === 0 && <p className="text-center text-muted-foreground py-8">No messages yet.</p>}
      </div>
    </div>
  );
};

export default AdminMessages;
