import { useEffect } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Sigmatrix LLC | Get in Touch for InterEx Demo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Sigmatrix LLC for InterEx healthcare interoperability platform demo. Call (443) 788-1596 or email support@sigmatrixllc.com. Mon-Fri 9AM-5PM EST.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
