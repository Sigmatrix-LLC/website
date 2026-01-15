import { useEffect } from "react";
import Header from "@/components/Header";
import ServicesSection from "@/components/InterExOverview";
import HowItWorks from "@/components/HowItWorks";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    document.title = "InterEx Platform by Sigmatrix | Healthcare Interoperability Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover InterEx by Sigmatrix LLC - healthcare interoperability platform for CMS integration, FHIR/HL7 support, ADR submissions, and HIPAA-compliant data exchange.');
    }
  }, []);

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
