
-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL DEFAULT '',
  excerpt TEXT DEFAULT '',
  featured_image TEXT DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Email Marketing',
  author TEXT NOT NULL DEFAULT 'Reachquix Team',
  published_at TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN NOT NULL DEFAULT false,
  meta_title TEXT DEFAULT '',
  meta_description TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Eva Q&A pairs table
CREATE TABLE public.eva_qa (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Eva conversations log
CREATE TABLE public.eva_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  visitor_message TEXT NOT NULL,
  eva_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT DEFAULT '',
  subject TEXT NOT NULL DEFAULT 'General Inquiry',
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  is_replied BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Waitlist signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'hero',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eva_qa ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eva_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Public read access for blog posts (published only)
CREATE POLICY "Public can read published blog posts" ON public.blog_posts
  FOR SELECT USING (is_published = true);

-- Public can read active Q&A pairs
CREATE POLICY "Public can read active eva qa" ON public.eva_qa
  FOR SELECT USING (is_active = true);

-- Public can insert conversations
CREATE POLICY "Public can insert eva conversations" ON public.eva_conversations
  FOR INSERT WITH CHECK (true);

-- Public can insert contact messages
CREATE POLICY "Public can insert contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Public can insert waitlist entries
CREATE POLICY "Public can insert waitlist" ON public.waitlist
  FOR INSERT WITH CHECK (true);

-- Authenticated users can manage all tables (for admin)
CREATE POLICY "Authenticated users can manage blog posts" ON public.blog_posts
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can manage eva qa" ON public.eva_qa
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can read eva conversations" ON public.eva_conversations
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can manage contact messages" ON public.contact_messages
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can read waitlist" ON public.waitlist
  FOR SELECT TO authenticated USING (true);
