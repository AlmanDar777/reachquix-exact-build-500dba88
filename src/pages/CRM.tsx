import { useState } from "react";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CRM = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert({ email: email.trim(), source: "crm" });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("You're on the list! We'll notify you when CRM launches.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-primary pt-[72px]">
        <div className="max-w-[600px] mx-auto px-6 py-24 text-center flex flex-col items-center gap-6">
          <Users size={64} className="text-primary-foreground" />
          <h1 className="font-heading font-semibold text-[42px] leading-tight text-primary-foreground">
            CRM — Coming Soon
          </h1>
          <p className="font-body text-[17px] text-primary-foreground/85 max-w-[560px]">
            Our full built-in CRM with pipeline management, contact history, task reminders, and team collaboration is launching very soon. Join the waitlist to get early access.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-[440px] mt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 rounded-lg px-4 text-sm font-body bg-white text-foreground placeholder:text-muted-foreground border-0 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading}
              className="h-12 px-6 rounded-lg font-body font-medium text-sm bg-secondary text-white hover:bg-secondary/90 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
            >
              {loading ? "Joining..." : "Join Waitlist →"}
            </button>
          </form>
          <p className="text-primary-foreground/60 text-xs font-body mt-8">
            🇪🇪 Registered in the Republic of Estonia, European Union
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CRM;
