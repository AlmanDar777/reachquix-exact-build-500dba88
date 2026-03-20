import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trash2, RefreshCw } from "lucide-react";

interface UserAccount {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
  email_confirmed_at: string | null;
}

const AdminUsers = () => {
  const [users, setUsers] = useState<UserAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error: fnError } = await supabase.functions.invoke("admin-users", {
        body: { action: "list" },
      });

      if (fnError) throw fnError;
      setUsers(data.users || []);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (userId: string, email: string) => {
    if (!confirm(`Are you sure you want to delete ${email}? This action cannot be undone.`)) return;
    try {
      const { error: fnError } = await supabase.functions.invoke("admin-users", {
        body: { action: "delete", userId },
      });
      if (fnError) throw fnError;
      loadUsers();
    } catch (err: any) {
      alert(err.message || "Failed to delete user");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl text-foreground">User Accounts</h1>
        <button
          onClick={loadUsers}
          disabled={loading}
          className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive rounded-lg p-4 mb-4 text-sm">
          {error}
        </div>
      )}

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Email</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Signed Up</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Last Sign In</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">
                  {user.email}
                  {user.email === "admin@gmail.com" && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Admin</span>
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(user.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : "Never"}
                </td>
                <td className="px-4 py-3">
                  {user.email_confirmed_at ? (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Verified</span>
                  ) : (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">Unverified</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {user.email !== "admin@gmail.com" && (
                    <button
                      onClick={() => handleDelete(user.id, user.email || "")}
                      className="text-muted-foreground hover:text-destructive cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p className="text-center text-muted-foreground py-8">Loading users...</p>}
        {!loading && users.length === 0 && !error && (
          <p className="text-center text-muted-foreground py-8">No users found</p>
        )}
      </div>

      <p className="text-muted-foreground text-xs mt-4">
        Total accounts: {users.length}
      </p>
    </div>
  );
};

export default AdminUsers;
