import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Sigmatrix LLC | Healthcare Interoperability Platform - InterEx CMS Integration";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sigmatrix LLC develops InterEx, a healthcare interoperability platform that simplifies CMS data exchange, HIPAA compliance, and ADR submissions. FHIR & HL7 ready.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CompanyOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
