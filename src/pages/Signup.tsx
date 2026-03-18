import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const benefits = [
  "Free 14-day trial on Growth plan",
  "No credit card required",
  "Setup in under 5 minutes",
  "Google Sheets connected in seconds",
  "Cancel anytime — no questions asked",
];

const planOptions = [
  { value: "starter", label: "$29 - Starter" },
  { value: "growth", label: "$59 - Growth" },
  { value: "agency", label: "$99 - Agency" },
];

const Signup = () => {
  const [plan, setPlan] = useState("growth");

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px] min-h-[calc(100vh-72px)] flex">
        {/* Left: Green panel — hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-center px-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-[32px] text-white mb-2 leading-tight">Start closing more deals today.</h2>
            <div className="space-y-3 mt-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <Check size={18} className="text-white/80 flex-shrink-0" />
                  <span className="font-body text-[16px] text-white/90">{b}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-12 p-6 rounded-xl bg-white/10 border border-white/20">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="white" className="text-white" />)}
              </div>
              <p className="font-body text-[15px] text-white/90 italic mb-4">
                "Reachquix automated our entire outreach. Reply rate tripled in 30 days."
              </p>
              <p className="font-body text-[14px] text-white/70">— Ahmed Al Mansoori, Dubai</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[440px] w-full py-8">
            <h1 className="font-heading text-[32px] md:text-[40px] text-secondary mb-2">Get started free</h1>
            <p className="font-body text-[15px] text-muted-foreground mb-8">Create your Reachquix account</p>

            <div className="space-y-4">
              <div>
                <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Full Name *</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Work Email *</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Password *</label>
                <input type="password" placeholder="Min 8 characters" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Company Name</label>
                  <input type="text" placeholder="Optional" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="Optional" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[16px] focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              {/* Plan selector */}
              <div>
                <label className="font-body text-[14px] font-medium text-secondary block mb-1.5">Select Plan</label>
                <div className="grid grid-cols-3 gap-2">
                  {planOptions.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setPlan(p.value)}
                      className={`py-2.5 rounded-lg font-body text-[13px] font-medium transition-colors border ${
                        plan === p.value ? "bg-primary text-white border-primary" : "border-border text-secondary hover:bg-muted"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 rounded-lg font-body font-medium text-[15px] text-white bg-primary hover:bg-primary/90 transition-colors min-h-[48px]">
                Create Free Account →
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-4 font-body text-[13px] text-muted-foreground">or</span></div>
              </div>

              <button className="w-full py-3 rounded-lg font-body font-medium text-[15px] text-secondary border-2 border-border hover:bg-muted transition-colors flex items-center justify-center gap-2 min-h-[48px]">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Sign up with Google
              </button>
            </div>

            <p className="font-body text-[12px] text-muted-foreground mt-4 text-center">
              By creating an account you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
            <p className="font-body text-[14px] text-muted-foreground mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">Log in →</Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
