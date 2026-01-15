import { useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Sigmatrix LLC | Healthcare Technology Company";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Sigmatrix LLC, a healthcare technology company building InterEx interoperability platform. Our mission, vision, and commitment to healthcare IT solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
