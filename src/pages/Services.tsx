import Header from "@/components/Header";
import ServicesSection from "@/components/InterExOverview";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ServicesSection />
        <HowItWorks />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
