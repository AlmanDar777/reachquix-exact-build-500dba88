import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit2, Trash2, X } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  is_published: boolean;
  meta_title: string;
  meta_description: string;
  created_at: string;
}

const categories = ["Email Marketing", "Sales Outreach", "CRM Tips", "MENA Business", "Product Updates", "Case Studies"];

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts((data as BlogPost[]) || []);
  };

  useEffect(() => { loadPosts(); }, []);

  const handleSave = async () => {
    if (!editing?.title) return;
    setLoading(true);
    const slug = editing.slug || editing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const payload = {
      title: editing.title,
      slug,
      content: editing.content || "",
      excerpt: editing.excerpt || "",
      category: editing.category || "Email Marketing",
      author: editing.author || "Reachquix Team",
      is_published: editing.is_published || false,
      meta_title: editing.meta_title || "",
      meta_description: editing.meta_description || "",
      published_at: editing.is_published ? new Date().toISOString() : null,
    };
    if (editing.id) {
      await supabase.from("blog_posts").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("blog_posts").insert(payload);
    }
    setEditing(null);
    setLoading(false);
    loadPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    loadPosts();
  };

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-2xl text-foreground">{editing.id ? "Edit Post" : "New Post"}</h1>
          <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground cursor-pointer"><X size={24} /></button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 space-y-4 max-w-3xl">
          <input value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="Title" className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.slug || ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder="Slug (auto-generated)" className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <select value={editing.category || "Email Marketing"} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring">
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} placeholder="Excerpt" className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <textarea value={editing.content || ""} onChange={(e) => setEditing({ ...editing, content: e.target.value })} placeholder="Content (Markdown supported)" rows={12} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.meta_title || ""} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} placeholder="Meta Title" className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.meta_description || ""} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} placeholder="Meta Description" className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <label className="flex items-center gap-2 text-sm font-body cursor-pointer">
            <input type="checkbox" checked={editing.is_published || false} onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })} className="accent-primary" />
            Published
          </label>
          <button onClick={handleSave} disabled={loading} className="h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50">
            {loading ? "Saving..." : "Save Post"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl text-foreground">Blog Posts</h1>
        <button onClick={() => setEditing({})} className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors">
          <Plus size={18} /> New Post
        </button>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Title</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Category</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Date</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{post.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{post.category}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${post.is_published ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {post.is_published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</td>
                <td className="px-4 py-3 flex gap-2 justify-center">
                  <button onClick={() => setEditing(post)} className="text-muted-foreground hover:text-primary cursor-pointer"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(post.id)} className="text-muted-foreground hover:text-destructive cursor-pointer"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && <p className="text-center text-muted-foreground py-8">No blog posts yet.</p>}
      </div>
    </div>
  );
};

export default AdminBlog;
