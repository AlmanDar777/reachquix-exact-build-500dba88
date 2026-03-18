import Navbar from "@/components/Navbar";

const Signup = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px] min-h-[80vh] flex items-center justify-center">
        <div className="max-w-[400px] w-full mx-auto px-6 py-20 text-center">
          <h1 className="font-heading text-[32px] md:text-[40px] text-foreground mb-2">Get started free</h1>
          <p className="font-body text-[15px] text-muted-foreground mb-8">Create your Reachquix account</p>
          <div className="space-y-4 text-left">
            <div>
              <label className="font-body text-[14px] font-medium text-foreground block mb-1.5">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[15px] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="font-body text-[14px] font-medium text-foreground block mb-1.5">Email</label>
              <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[15px] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="font-body text-[14px] font-medium text-foreground block mb-1.5">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-border font-body text-[15px] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button className="w-full py-3 rounded-lg font-body font-medium text-[15px] text-primary-foreground bg-primary hover:bg-primary/90 transition-colors">
              Create Account
            </button>
          </div>
          <p className="font-body text-[14px] text-muted-foreground mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium hover:underline">Log in</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
