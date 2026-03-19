import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Edit2, Trash2, X, Bold, Italic, List, Heading2, Undo, Redo, Image as ImageIcon } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapImage from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useTranslation } from "react-i18next";

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
  featured_image: string;
  created_at: string;
}

const TipTapEditor = ({ content, onChange }: { content: string; onChange: (html: string) => void }) => {
  const { t } = useTranslation();

  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapImage,
      Placeholder.configure({ placeholder: t("adminBlog.editorPlaceholder") }),
    ],
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return null;

  const addImage = () => {
    const url = prompt(t("adminBlog.promptImageUrl"));
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  return (
    <div className="border border-input rounded-lg overflow-hidden">
      <div className="flex items-center gap-1 px-3 py-2 border-b border-input bg-muted/50 flex-wrap">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`p-1.5 rounded hover:bg-muted ${editor.isActive("bold") ? "bg-muted text-primary" : "text-muted-foreground"}`}><Bold size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-1.5 rounded hover:bg-muted ${editor.isActive("italic") ? "bg-muted text-primary" : "text-muted-foreground"}`}><Italic size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-1.5 rounded hover:bg-muted ${editor.isActive("heading", { level: 2 }) ? "bg-muted text-primary" : "text-muted-foreground"}`}><Heading2 size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={`p-1.5 rounded hover:bg-muted ${editor.isActive("bulletList") ? "bg-muted text-primary" : "text-muted-foreground"}`}><List size={16} /></button>
        <button type="button" onClick={addImage} className="p-1.5 rounded hover:bg-muted text-muted-foreground"><ImageIcon size={16} /></button>
        <div className="w-px h-5 bg-border mx-1" />
        <button type="button" onClick={() => editor.chain().focus().undo().run()} className="p-1.5 rounded hover:bg-muted text-muted-foreground"><Undo size={16} /></button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} className="p-1.5 rounded hover:bg-muted text-muted-foreground"><Redo size={16} /></button>
      </div>
      <EditorContent editor={editor} className="prose prose-sm max-w-none p-4 min-h-[300px] focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[280px]" />
    </div>
  );
};

const AdminBlog = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<Partial<BlogPost> | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    { value: "Email Marketing", label: t("blog.categories.emailMarketing") },
    { value: "Sales Outreach", label: t("blog.categories.salesOutreach") },
    { value: "CRM Tips", label: t("blog.categories.crmTips") },
    { value: "MENA Business", label: t("blog.categories.menaBusiness") },
    { value: "Product Updates", label: t("blog.categories.productUpdates") },
    { value: "Case Studies", label: t("blog.categories.caseStudies") },
  ];

  const loadPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts((data as BlogPost[]) || []);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleSave = async () => {
    if (!editing?.title) return;
    setLoading(true);
    const slug = editing.slug || editing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const payload = {
      title: editing.title,
      slug,
      content: editing.content || "",
      excerpt: editing.excerpt || "",
      category: editing.category || categories[0].value,
      author: editing.author || t("common.brandTeam"),
      is_published: editing.is_published || false,
      meta_title: editing.meta_title || "",
      meta_description: editing.meta_description || "",
      featured_image: editing.featured_image || "",
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
    if (!confirm(t("adminBlog.confirmDelete"))) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    loadPosts();
  };

  if (editing) {
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-heading text-2xl text-foreground">{editing.id ? t("adminBlog.editTitle") : t("adminBlog.newTitle")}</h1>
          <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground cursor-pointer"><X size={24} /></button>
        </div>
        <div className="bg-card rounded-xl border border-border p-6 space-y-4 max-w-4xl">
          <input value={editing.title || ""} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder={t("adminBlog.titlePlaceholder")} className="w-full h-12 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.slug || ""} onChange={(e) => setEditing({ ...editing, slug: e.target.value })} placeholder={t("adminBlog.slugPlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <div className="grid grid-cols-2 gap-4">
            <select value={editing.category || categories[0].value} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring">
              {categories.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}
            </select>
            <input value={editing.author || ""} onChange={(e) => setEditing({ ...editing, author: e.target.value })} placeholder={t("adminBlog.authorPlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <input value={editing.excerpt || ""} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} placeholder={t("adminBlog.excerptPlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.featured_image || ""} onChange={(e) => setEditing({ ...editing, featured_image: e.target.value })} placeholder={t("adminBlog.featuredImagePlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <TipTapEditor content={editing.content || ""} onChange={(html) => setEditing({ ...editing, content: html })} />
          <input value={editing.meta_title || ""} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} placeholder={t("adminBlog.metaTitlePlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <input value={editing.meta_description || ""} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} placeholder={t("adminBlog.metaDescriptionPlaceholder")} className="w-full h-10 rounded-lg border border-input bg-background px-4 text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring" />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm font-body cursor-pointer">
              <input type="checkbox" checked={editing.is_published || false} onChange={(e) => setEditing({ ...editing, is_published: e.target.checked })} className="accent-primary" />
              {t("adminBlog.published")}
            </label>
          </div>
          <div className="flex gap-3">
            <button onClick={handleSave} disabled={loading} className="h-10 px-6 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50">
              {loading ? t("adminBlog.saving") : t("adminBlog.savePost")}
            </button>
            <button onClick={() => { setEditing({ ...editing, is_published: true }); setTimeout(handleSave, 0); }} disabled={loading} className="h-10 px-6 rounded-lg border-2 border-primary text-primary font-body font-medium cursor-pointer hover:bg-primary/5 transition-colors disabled:opacity-50">
              {t("adminBlog.saveAndPublish")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl text-foreground">{t("adminBlog.pageTitle")}</h1>
        <button onClick={() => setEditing({})} className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-body font-medium cursor-pointer hover:bg-primary/90 transition-colors">
          <Plus size={18} /> {t("adminBlog.newButton")}
        </button>
      </div>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminBlog.colTitle")}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminBlog.colCategory")}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminBlog.colStatus")}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t("adminBlog.colDate")}</th>
              <th className="px-4 py-3 font-medium text-muted-foreground">{t("adminBlog.colActions")}</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-border">
                <td className="px-4 py-3 text-foreground">{post.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{categories.find((category) => category.value === post.category)?.label || post.category}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full ${post.is_published ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {post.is_published ? t("adminBlog.statusPublished") : t("adminBlog.statusDraft")}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(post.created_at).toLocaleDateString(i18n.language)}</td>
                <td className="px-4 py-3 flex gap-2 justify-center">
                  <button onClick={() => setEditing(post)} className="text-muted-foreground hover:text-primary cursor-pointer"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(post.id)} className="text-muted-foreground hover:text-destructive cursor-pointer"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && <p className="text-center text-muted-foreground py-8">{t("adminBlog.empty")}</p>}
      </div>
    </div>
  );
};

export default AdminBlog;
