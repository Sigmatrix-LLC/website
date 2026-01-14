import { ArrowRight, Shield, Zap, Network } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Healthcare Interoperability Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
            Building Practical{" "}
            <span className="text-primary">Interoperability</span>{" "}
            Solutions for Healthcare
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-up delay-200">
            Sigmatrix LLC develops healthcare technology platforms that simplify 
            complex data exchange and compliance workflows. Our flagship product, 
            <span className="text-primary font-semibold"> InterEx</span>, helps 
            providers interact with CMS securely and efficiently.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-300">
            <Link 
              to="/services" 
              className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              Explore InterEx
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              Request a Demo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up delay-400">
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Network className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">FHIR & HL7 Ready</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white/80">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Enterprise Scale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210, 20%, 98%)"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;