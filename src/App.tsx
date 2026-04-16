import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import EvaChatbot from "@/components/EvaChatbot";
import ScrollToTop from "@/components/ScrollToTop";
import Maintenance from "./pages/Maintenance.tsx";
import Index from "./pages/Index.tsx";
import Features from "./pages/Features.tsx";
import Pricing from "./pages/Pricing.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Admin from "./pages/Admin.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import CRM from "./pages/CRM.tsx";
import EmailMarketing from "./pages/EmailMarketing.tsx";
import HelpCenter from "./pages/HelpCenter.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import GDPRPage from "./pages/GDPR.tsx";
import Docs from "./pages/Docs.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const isMaintenanceMode = false; // Set to true to enable maintenance mode

const App = () => {
  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
          <EvaChatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
