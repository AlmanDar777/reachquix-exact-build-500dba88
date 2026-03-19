import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import StatsBar from "@/components/StatsBar";
import PlatformOverview from "@/components/PlatformOverview";
import HowItWorks from "@/components/HowItWorks";
import EmailFeatures from "@/components/EmailFeatures";
import CRMFeatures from "@/components/CRMFeatures";
import AIFeatures from "@/components/AIFeatures";
import WhyReachquix from "@/components/WhyReachquix";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <LogoBar />
      <StatsBar />
      <PlatformOverview />
      <HowItWorks />
      <EmailFeatures />
      <CRMFeatures />
      <AIFeatures />
      <WhyReachquix />
      <PricingSection />
      <Testimonials />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
