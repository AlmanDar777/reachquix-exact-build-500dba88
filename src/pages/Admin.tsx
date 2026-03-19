import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, FileText, MessageCircle, Mail, Users, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminBlog from "@/components/admin/AdminBlog";
import AdminEvaQA from "@/components/admin/AdminEvaQA";
import AdminMessages from "@/components/admin/AdminMessages";
import AdminWaitlist from "@/components/admin/AdminWaitlist";

const Admin = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const tabs = [
    { id: "dashboard", label: t("admin.tabs.dashboard"), icon: LayoutDashboard },
    { id: "blog", label: t("admin.tabs.blog"), icon: FileText },
    { id: "eva", label: t("admin.tabs.eva"), icon: MessageCircle },
    { id: "messages", label: t("admin.tabs.messages"), icon: Mail },
    { id: "waitlist", label: t("admin.tabs.waitlist"), icon: Users },
  ];

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

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">{t("admin.loading")}</div>;

  return (
    <div className="min-h-screen flex bg-muted">
      <aside className="w-64 bg-secondary text-secondary-foreground flex flex-col shrink-0">
        <div className="p-6">
          <Link to="/" className="font-heading text-xl text-secondary-foreground">{t("common.brand")}</Link>
          <p className="text-secondary-foreground/60 text-xs mt-1">{t("admin.panel")}</p>
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
            {t("admin.logout")}
          </button>
        </div>
      </aside>

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
