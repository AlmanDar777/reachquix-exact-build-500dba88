import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useTranslation } from "react-i18next";

const AdminWaitlist = () => {
  const { t, i18n } = useTranslation();
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("waitlist").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      setEntries(data || []);
    });
  }, []);

  return (
    <div>
      <h1 className="font-heading text-2xl text-foreground mb-6">{t("adminWaitlist.pageTitle")}</h1>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminWaitlist.colEmail")}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminWaitlist.colSource")}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminWaitlist.colDate")}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry: any) => (
              <tr key={entry.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{entry.email}</td>
                <td className="px-4 py-3 text-muted-foreground capitalize">{entry.source}</td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(entry.created_at).toLocaleString(i18n.language)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {entries.length === 0 && <p className="text-center text-muted-foreground py-8">{t("adminWaitlist.empty")}</p>}
      </div>
    </div>
  );
};

export default AdminWaitlist;
