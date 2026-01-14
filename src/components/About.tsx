import { Target, Eye, Sparkles, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">
            About <span className="text-gradient">Sigmatrix LLC</span>
          </h2>
          <p className="section-subheading mx-auto">
            A healthcare technology company committed to building practical, 
            standards-based solutions for the industry's interoperability challenges.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="card-feature">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To reduce the operational complexity of healthcare data exchange 
              by building thoughtful, reliable platforms that prioritize real 
              workflow needs over feature bloat. We believe interoperability 
              should be invisible — enabling providers to focus on care, not 
              integration challenges.
            </p>
          </div>

          {/* Vision */}
          <div className="card-feature">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A healthcare ecosystem where data flows seamlessly between providers, 
              payers, and regulatory bodies — without requiring organizations to 
              become integration experts. We envision platforms that abstract 
              complexity while maintaining the highest standards of security 
              and compliance.
            </p>
          </div>

          {/* Commitment */}
          <div className="card-feature">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Our Commitment
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Every product we build adheres to industry standards — FHIR, HL7, 
              and regulatory requirements like HIPAA. We don't cut corners on 
              security or compliance. Our commitment is to create technology 
              that healthcare organizations can trust with their most sensitive 
              operations.
            </p>
          </div>

          {/* Innovation */}
          <div className="card-feature">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">
                Product-Driven Innovation
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We are not a consulting company. We build products. InterEx is 
              our first offering, and it represents our approach: focused, 
              practical, and built for real healthcare workflows. Future 
              products will follow the same principles — solving specific 
              problems exceptionally well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
