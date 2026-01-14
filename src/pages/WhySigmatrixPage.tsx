import Header from "@/components/Header";
import WhySigmatrix from "@/components/WhySigmatrix";
import Footer from "@/components/Footer";

const WhySigmatrixPage = () => {
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
