import { Mail, MessageSquare, Building2, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to see how InterEx can streamline your healthcare 
              interoperability workflows? Reach out to discuss how 
              Sigmatrix can help your organization.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <a 
              href="mailto:support@sigmatrixllc.com"
              className="card-feature group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="icon-box flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Email Us
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-1">
                    support@sigmatrixllc.com
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Send us an email anytime
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+14437881596"
              className="card-feature group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="icon-box flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Call Us
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-1">
                    (443) 788-1596
                  </p>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Mon-Fri, 9:00 AM – 5:00 PM EST
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  Request a Demo
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  See InterEx in action with a personalized walkthrough 
                  tailored to your organization's needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="icon-box flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  Enterprise Solutions
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Large organization? Let's discuss how InterEx can 
                  scale to meet your specific requirements.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 hero-gradient rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Ready to Transform Your Healthcare Workflows?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Contact us today to learn how InterEx can simplify your CMS interactions 
              and streamline compliance workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@sigmatrixllc.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a 
                href="tel:+14437881596"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
