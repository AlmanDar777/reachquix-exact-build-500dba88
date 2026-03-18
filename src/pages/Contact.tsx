import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-[72px] min-h-[60vh] flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center">
          <h1 className="font-heading text-[36px] md:text-[48px] text-foreground mb-4">Contact</h1>
          <p className="font-body text-[16px] text-muted-foreground max-w-[600px] mx-auto">
            Get in touch with the Reachquix team. Full page coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
