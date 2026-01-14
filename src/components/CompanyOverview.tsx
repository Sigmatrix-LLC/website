import { ArrowRight } from "lucide-react";

const CompanyOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading mb-6">
            Healthcare Technology,{" "}
            <span className="text-gradient">Thoughtfully Built</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            Sigmatrix LLC is a healthcare technology company focused on building 
            reliable, standards-based interoperability platforms. We design products 
            that reduce operational burden and improve how healthcare organizations 
            interact with regulatory and payer systems.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
