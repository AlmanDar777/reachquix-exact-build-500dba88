import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit2, Trash2, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface QA {
  id: string;
  question: string;
  answer: string;
  category: string;
  is_active: boolean;
  created_at: string;
}

const AdminEvaQA = () => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState<QA[]>([]);
  const [conversations, setConversations] = useState<any[]>([]);
  const [editing, setEditing] = useState<Partial<QA> | null>(null);
  const [tab, setTab] = useState<"qa" | "conversations">("qa");
  const [loading, setLoading] = useState(false);

  const qaCategories = [
    { value: "General", label: t("adminQa.categories.general") },
    { value: "Pricing", label: t("adminQa.categories.pricing") },
    { value: "Features", label: t("adminQa.categories.features") },
    { value: "Technical", label: t("adminQa.categories.technical") },
    { value: "Getting Started", label: t("adminQa.categories.gettingStarted") },
  ];

  const loadData = async () => {
    const [qa, convos] = await Promise.all([
      supabase.from("eva_qa").select("*").order("created_at", { ascending: false }),
      supabase.from("eva_conversations").select("*").order("created_at", { ascending: false }).limit(50),
    ]);
    setItems((qa.data as QA[]) || []);
    setConversations(convos.data || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async () => {
    if (!editing?.question || !editing?.answer) return;
    setLoading(true);
    const payload = {
      question: editing.question,
      answer: editing.answer,
      category: editing.category || qaCategories[0].value,
      is_active: editing.is_active !== false,
    };
    if (editing.id) {
      await supabase.from("eva_qa").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("eva_qa").insert(payload);
    }
    setEditing(null);
    setLoading(false);
    loadData();
  };

  const handleDelete = async (id: string) => {
    if (!confirm(t("adminQa.confirmDelete"))) return;
    await supabase.from("eva_qa").delete().eq("id", id);
    loadData();
  };

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-2xl text-foreground">{editing.id ? t("adminQa.editTitle") : t("adminQa.newTitle")}</h1>
          <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground cursor-pointer"><X size={24} /></button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 space-y-4 max-w-2xl">
          <input value={editing.question || ""} onChange={(e) => setEditing({ ...editing, question: e.target.value })} placeholder={t("adminQa.questionPlaceholder")} className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <textarea value={editing.answer || ""} onChange={(e) => setEditing({ ...editing, answer: e.target.value })} placeholder={t("adminQa.answerPlaceholder")} rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <select value={editing.category || qaCategories[0].value} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring">
            {qaCategories.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}
          </select>
          <button onClick={handleSave} disabled={loading} className="h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50">
            {loading ? t("adminQa.saving") : t("adminQa.save")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl text-foreground">{t("adminQa.pageTitle")}</h1>
        <button onClick={() => setEditing({})} className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors">
          <Plus size={18} /> {t("adminQa.addButton")}
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={() => setTab("qa")} className={`px-4 py-2 rounded-lg text-sm font-body cursor-pointer transition-colors ${tab === "qa" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{t("adminQa.tabQa")}</button>
        <button onClick={() => setTab("conversations")} className={`px-4 py-2 rounded-lg text-sm font-body cursor-pointer transition-colors ${tab === "conversations" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{t("adminQa.tabConversations")}</button>
      </div>

      {tab === "qa" ? (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableQuestion")}</th>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableAnswer")}</th>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableCategory")}</th>
                <th className="px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableActions")}</th>
              </tr>
            </thead>
            <tbody>
              {items.map((qa) => (
                <tr key={qa.id} className="border-t border-border">
                  <td className="px-4 py-3 text-foreground">{qa.question}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{qa.answer}</td>
                  <td className="px-4 py-3 text-muted-foreground">{qaCategories.find((category) => category.value === qa.category)?.label || qa.category}</td>
                  <td className="px-4 py-3 flex gap-2 justify-center">
                    <button onClick={() => setEditing(qa)} className="text-muted-foreground hover:text-primary cursor-pointer"><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(qa.id)} className="text-muted-foreground hover:text-destructive cursor-pointer"><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && <p className="text-center text-muted-foreground py-8">{t("adminQa.emptyQa")}</p>}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableTime")}</th>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableVisitor")}</th>
                <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminQa.tableResponse")}</th>
              </tr>
            </thead>
            <tbody>
              {conversations.map((conversation: any) => (
                <tr key={conversation.id} className="border-t border-border">
                  <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{new Date(conversation.created_at).toLocaleString(i18n.language)}</td>
                  <td className="px-4 py-3 text-foreground">{conversation.visitor_message}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{conversation.eva_response}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {conversations.length === 0 && <p className="text-center text-muted-foreground py-8">{t("adminQa.emptyConversations")}</p>}
        </div>
      )}
    </div>
  );
};

export default AdminEvaQA;
