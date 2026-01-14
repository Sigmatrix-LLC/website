import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";

const Home = () => {
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
