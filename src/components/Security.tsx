import { Shield, Lock, UserCheck, FileSearch, Server, Key } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "HIPAA-Aware Architecture",
    description: "Built from the ground up with HIPAA requirements in mind, ensuring protected health information is handled appropriately at every layer."
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "All data is encrypted at rest and in transit using industry-standard encryption protocols. Sensitive documents are securely packaged and transmitted."
  },
  {
    icon: UserCheck,
    title: "Role-Based Access Control",
    description: "Granular permission systems ensure users only access what they need. Support for Customer Admins, Provider Group Admins, and Basic Users."
  },
  {
    icon: FileSearch,
    title: "Comprehensive Audit Logging",
    description: "Every action is logged with complete traceability. Full audit trails support compliance requirements and internal governance."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with redundancy, disaster recovery, and continuous security monitoring."
  },
  {
    icon: Key,
    title: "Access Management",
    description: "Secure authentication mechanisms with session management, timeout policies, and support for enterprise identity providers."
  }
];

const Security = () => {
  return (
    <section id="security" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold">Security & Compliance</span>
          </div>
          <h2 className="section-heading mb-4">
            Built for <span className="text-gradient">Healthcare Security</span>
          </h2>
          <p className="section-subheading mx-auto">
            Security and compliance are foundational to everything we build. 
            InterEx is designed to meet the rigorous demands of healthcare 
            data protection.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="card-feature">
              <div className="icon-box mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="hero-gradient rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Regulatory Compliance is Not Optional
            </h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              We understand that healthcare organizations operate under strict regulatory 
              requirements. InterEx is designed to support your compliance obligations, 
              not complicate them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
