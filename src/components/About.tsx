import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Heart } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";
import GlassCard from "./motion/GlassCard";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const contactInfo = [
    { icon: MapPin, text: "Singarapettai, Krishnagiri, Tamil Nadu" },
    { icon: Mail, text: "sathishbalask67@gmail.com", href: "mailto:sathishbalask67@gmail.com" },
    { icon: Phone, text: "+91 95857 96149", href: "tel:+919585796149" },
    { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/sathish-kumar-507740321" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                About Me
              </span>
            </FadeInOnScroll>
            <FadeInOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
                Turning Data into <span className="gradient-text">Insights</span>
              </h2>
            </FadeInOnScroll>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <FadeInOnScroll direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated <span className="text-foreground font-medium">Data Analyst</span> passionate about bridging the gap between raw data and strategic business value. I specialize in the full data lifecycle—from structured extraction and rigorous cleaning to advanced statistical analysis and high-impact visualization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By leveraging tools like Power BI, SQL, and Python, I translate complex datasets into clear, actionable stories that empower stakeholders to make data-driven decisions with confidence. Eager to solve real-world business challenges through analytical excellence.
                </p>
                <div className="pt-4">
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20"
                    whileHover={!shouldReduceMotion ? { scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-primary">Power BI Certified</span>
                  </motion.div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Contact Info Card */}
            <FadeInOnScroll direction="right" delay={0.3}>
              <GlassCard className="space-y-4 relative">
                <h3 className="font-heading font-semibold text-lg mb-6">Contact Information</h3>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                      whileHover={!shouldReduceMotion ? { scale: 1.1 } : {}}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
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

                {/* Personal Credit relocated from Footer
                <div className="pt-6 mt-6 border-t border-border/50">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    Made with{" "}
                    <motion.span
                      animate={!shouldReduceMotion ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Heart className="w-4 h-4 text-destructive" />
                    </motion.span>{" "}
                    in Tamil Nadu
                  </p>
                </div> */}
              </GlassCard>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;