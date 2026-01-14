import { 
  Monitor, 
  Layers, 
  GitBranch, 
  Building2, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Provider-Facing Modern Interface",
    description: "Clean, intuitive UI built for real healthcare workflows. A modern alternative to legacy CMS portals.",
    details: [
      "ADR submissions",
      "Appeals management",
      "Prior Authorizations",
      "eMDR tracking",
      "Letter and response management",
      "Submission status visibility"
    ]
  },
  {
    icon: Layers,
    title: "Interoperability Layer",
    description: "InterEx sits between providers and CMS systems, abstracting complex standards.",
    details: [
      "FHIR integration",
      "HL7 support",
      "Document exchange standards",
      "Metadata handling & validation",
      "Secure packaging"
    ]
  },
  {
    icon: GitBranch,
    title: "Workflow Orchestration",
    description: "Manages the full lifecycle of submissions from start to finish.",
    details: [
      "Pre-submission validation",
      "Status tracking & acknowledgments",
      "Error handling & retries",
      "End-to-end traceability",
      "Complete auditability"
    ]
  },
  {
    icon: Building2,
    title: "Multi-Tenant Architecture",
    description: "Built for healthcare organizations of all sizes with enterprise-ready capabilities.",
    details: [
      "Multiple customers support",
      "Provider group management",
      "Multi-NPI support",
      "Hierarchical roles",
      "Customer & Group Admin roles"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance by Design",
    description: "Built from the ground up with regulatory compliance in mind.",
    details: [
      "HIPAA-aware architecture",
      "Secure document handling",
      "Role-based access control",
      "Audit logging",
      "Complete traceability"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-primary text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="section-heading mb-4">
            What <span className="text-gradient">InterEx</span> Actually Does
          </h2>
          <p className="section-subheading mx-auto">
            InterEx is Sigmatrix's flagship product — a provider-focused 
            interoperability platform designed to simplify how healthcare organizations 
            interact with CMS.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`card-feature ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="icon-box mb-5">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            <strong className="text-foreground">Result:</strong> Providers focus on workflows, not integration complexity.
          </p>
          <a href="#how-it-works" className="inline-flex items-center gap-2 btn-accent group">
            See How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
