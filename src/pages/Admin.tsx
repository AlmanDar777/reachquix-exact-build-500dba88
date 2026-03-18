import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, FileText, MessageCircle, Mail, Users, LogOut } from "lucide-react";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminBlog from "@/components/admin/AdminBlog";
import AdminEvaQA from "@/components/admin/AdminEvaQA";
import AdminMessages from "@/components/admin/AdminMessages";
import AdminWaitlist from "@/components/admin/AdminWaitlist";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "blog", label: "Blog Posts", icon: FileText },
  { id: "eva", label: "Eva Chatbot Q&A", icon: MessageCircle },
  { id: "messages", label: "Contact Messages", icon: Mail },
  { id: "waitlist", label: "Waitlist Emails", icon: Users },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/admin/login");
      else setLoading(false);
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading...</div>;

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-secondary-foreground flex flex-col shrink-0">
        <div className="p-6">
          <Link to="/" className="font-heading text-xl text-secondary-foreground">Reachquix</Link>
          <p className="text-secondary-foreground/60 text-xs mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body cursor-pointer transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-secondary-foreground/70 hover:bg-secondary-foreground/10"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body text-secondary-foreground/70 hover:bg-secondary-foreground/10 cursor-pointer transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "dashboard" && <AdminDashboard />}
        {activeTab === "blog" && <AdminBlog />}
        {activeTab === "eva" && <AdminEvaQA />}
        {activeTab === "messages" && <AdminMessages />}
        {activeTab === "waitlist" && <AdminWaitlist />}
      </main>
    </div>
  );
};

export default Admin;
