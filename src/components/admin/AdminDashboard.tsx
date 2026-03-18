import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { FileText, CheckCircle, MessageCircle, Users } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalPosts: 0, publishedPosts: 0, conversations: 0, waitlist: 0 });
  const [recentMessages, setRecentMessages] = useState<any[]>([]);
  const [recentWaitlist, setRecentWaitlist] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const [posts, published, convos, wl, msgs, wlRecent] = await Promise.all([
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("is_published", true),
        supabase.from("eva_conversations").select("id", { count: "exact", head: true }),
        supabase.from("waitlist").select("id", { count: "exact", head: true }),
        supabase.from("contact_messages").select("*").order("created_at", { ascending: false }).limit(10),
        supabase.from("waitlist").select("*").order("created_at", { ascending: false }).limit(10),
      ]);
      setStats({
        totalPosts: posts.count || 0,
        publishedPosts: published.count || 0,
        conversations: convos.count || 0,
        waitlist: wl.count || 0,
      });
      setRecentMessages(msgs.data || []);
      setRecentWaitlist(wlRecent.data || []);
    };
    load();
  }, []);

  const statCards = [
    { label: "Total Blog Posts", value: stats.totalPosts, icon: FileText },
    { label: "Published Posts", value: stats.publishedPosts, icon: CheckCircle },
    { label: "Eva Conversations", value: stats.conversations, icon: MessageCircle },
    { label: "Waitlist Signups", value: stats.waitlist, icon: Users },
  ];

  return (
    <div>
      <h1 className="font-heading text-2xl text-foreground mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((s) => (
          <div key={s.label} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm font-body">{s.label}</span>
              <s.icon size={18} className="text-primary" />
            </div>
            <p className="font-heading text-3xl text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-5">
          <h2 className="font-heading text-lg text-foreground mb-4">Recent Contact Messages</h2>
          {recentMessages.length === 0 ? (
            <p className="text-muted-foreground text-sm">No messages yet.</p>
          ) : (
            <div className="space-y-3">
              {recentMessages.map((m: any) => (
                <div key={m.id} className="flex items-center justify-between text-sm border-b border-border pb-2">
                  <div>
                    <p className="font-medium text-foreground">{m.name}</p>
                    <p className="text-muted-foreground text-xs">{m.email}</p>
                  </div>
                  <span className="text-muted-foreground text-xs">{new Date(m.created_at).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-card rounded-xl border border-border p-5">
          <h2 className="font-heading text-lg text-foreground mb-4">Recent Waitlist Signups</h2>
          {recentWaitlist.length === 0 ? (
            <p className="text-muted-foreground text-sm">No signups yet.</p>
          ) : (
            <div className="space-y-3">
              {recentWaitlist.map((w: any) => (
                <div key={w.id} className="flex items-center justify-between text-sm border-b border-border pb-2">
                  <p className="text-foreground">{w.email}</p>
                  <span className="text-muted-foreground text-xs">{w.source} · {new Date(w.created_at).toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
