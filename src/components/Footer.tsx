import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoWithText from "@/assets/logo-with-text.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoWithText} 
                alt="Sigmatrix LLC" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              A healthcare technology company focused on building reliable, 
              standards-based interoperability platforms that reduce operational 
              burden for healthcare organizations.
            </p>
            <p className="text-white/50 text-sm">
              Healthcare Technology • Interoperability • Compliance
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  InterEx Platform
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/why-sigmatrix" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Why Sigmatrix
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Sigmatrix LLC. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
