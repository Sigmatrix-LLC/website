import { ShieldCheck, Building2, FileUp, ArrowRightLeft, Activity } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: ShieldCheck,
    title: "Sign In Safely",
    description: "Log in with your email and password, then verify with a security code from your phone app. Your role controls what you can see and do.",
  },
  {
    number: 2,
    icon: Building2,
    title: "Set Up Your Providers",
    description: "Add your healthcare providers' information (like NPIs). InterEx connects through PCG's FHIR APIs to register with Medicare's eSMD system automatically.",
  },
  {
    number: 3,
    icon: FileUp,
    title: "Submit Your Documents",
    description: "Create your submission—choose the type (ADR response, Appeal, or PWK documentation), attach your PDF files, and submit through our interface.",
  },
  {
    number: 4,
    icon: ArrowRightLeft,
    title: "We Route Through PCG to eSMD",
    description: "InterEx sends your submission through PCG's FHIR Wrapper APIs, which translates and delivers everything to Medicare's eSMD system securely.",
  },
  {
    number: 5,
    icon: Activity,
    title: "Track Everything in Real-Time",
    description: "See live updates synced from eSMD through PCG, check submission status, and access all Medicare correspondence in one dashboard.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Technical Flow
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            How <span className="text-gradient">InterEx</span> Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless, secure workflow connecting your healthcare organization directly to Medicare's eSMD system.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number Circle - Mobile & Desktop */}
                <div className="absolute left-8 sm:left-8 md:left-1/2 -translate-x-1/2 z-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 ring-4 ring-background">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-24 sm:pl-24 md:pl-0`}>
                  <div className="group bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <step.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block md:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <span className="text-base font-medium text-foreground">
              Secure, compliant, and fully automated end-to-end
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
