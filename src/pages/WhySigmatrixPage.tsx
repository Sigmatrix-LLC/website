import { useEffect } from "react";
import Header from "@/components/Header";
import WhySigmatrix from "@/components/WhySigmatrix";
import Footer from "@/components/Footer";

const WhySigmatrixPage = () => {
  useEffect(() => {
    document.title = "Why Choose Sigmatrix LLC | Healthcare Interoperability Experts";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Why Sigmatrix LLC? Product-first mindset, deep healthcare workflow understanding, FHIR/HL7 standards, HIPAA compliance focus, and scalable platform design for healthcare IT.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhySigmatrix />
      </main>
      <Footer />
    </div>
  );
};

export default WhySigmatrixPage;
