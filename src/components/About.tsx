import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: MapPin, text: "Singarapettai, Krishnagiri, Tamil Nadu" },
    { icon: Mail, text: "sathishbalask67@gmail.com", href: "mailto:sathishbalask67@gmail.com" },
    { icon: Phone, text: "+91 95857 96149", href: "tel:+919585796149" },
    { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/sathish-kumar-507740321" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 data-dots opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mt-4"
            >
              Turning Data into <span className="gradient-text">Insights</span>
            </motion.h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Enthusiastic and detail-driven <span className="text-foreground font-medium">Data Analyst</span> with a strong foundation in data analysis, visualization, and reporting. Skilled in Excel, SQL, and Power BI for data cleaning and interpretation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Developed dashboards for jewellery shop administration, sports meet management, and app analytics. I turn raw data into insights and support data-driven decision-making.
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-primary">Power BI Certified</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-6 space-y-4"
            >
              <h3 className="font-heading font-semibold text-lg mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
