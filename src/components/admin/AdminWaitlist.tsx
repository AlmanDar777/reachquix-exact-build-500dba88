import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const AdminWaitlist = () => {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("waitlist").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      setEntries(data || []);
    });
  }, []);

  return (
    <div>
      <h1 className="font-heading text-2xl text-foreground mb-6">Waitlist Signups</h1>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Source</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e: any) => (
              <tr key={e.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{e.email}</td>
                <td className="px-4 py-3 text-muted-foreground capitalize">{e.source}</td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(e.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {entries.length === 0 && <p className="text-center text-muted-foreground py-8">No signups yet.</p>}
      </div>
    </div>
  );
};

export default AdminWaitlist;
