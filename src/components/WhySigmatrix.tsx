import { Lightbulb, Heart, Network, Shield, Expand } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Product-First Mindset",
    description: "We build focused products that solve real problems, not consulting services dressed as software."
  },
  {
    icon: Heart,
    title: "Deep Workflow Understanding",
    description: "Our solutions are designed by people who understand healthcare operations at a practical level."
  },
  {
    icon: Network,
    title: "Standards-Based Interoperability",
    description: "Built on FHIR, HL7, and industry standards for reliable, future-proof integrations."
  },
  {
    icon: Shield,
    title: "Security & Compliance Focus",
    description: "Regulatory compliance isn't an afterthought — it's foundational to everything we build."
  },
  {
    icon: Expand,
    title: "Scalable Platform Design",
    description: "Architecture designed to grow with your organization, from single practice to enterprise."
  }
];

const WhySigmatrix = () => {
  return (
    <section id="why-sigmatrix" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-heading mb-6">
              Why <span className="text-gradient">Sigmatrix</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We build healthcare technology differently. Our approach combines 
              deep domain expertise with modern software engineering practices 
              to create platforms that truly serve provider workflows.
            </p>

            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="icon-box flex-shrink-0">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="card-elevated p-8 lg:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 hero-gradient rounded-2xl mb-6">
                  <span className="text-4xl font-display font-bold text-white">S</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Sigmatrix LLC
                </h3>
                <p className="text-muted-foreground mb-8">
                  Healthcare Technology Company
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-display font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Flagship Product</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-display font-bold text-accent">5</div>
                    <div className="text-sm text-muted-foreground">Core Capabilities</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-display font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">HIPAA Focused</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-display font-bold text-accent">∞</div>
                    <div className="text-sm text-muted-foreground">Scale Ready</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySigmatrix;
