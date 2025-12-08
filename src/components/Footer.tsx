import { motion, useReducedMotion } from "framer-motion";
import { Heart, Linkedin, Mail, Phone } from "lucide-react";
import FadeInOnScroll from "./motion/FadeInOnScroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sathish-kumar-507740321",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:sathishbalask67@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+919585796149",
      label: "Phone",
    },
  ];

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <FadeInOnScroll direction="up">
            <div className="text-center md:text-left">
              <motion.a
                href="#"
                className="text-xl font-heading font-bold gradient-text inline-block"
                whileHover={!shouldReduceMotion ? { scale: 1.05 } : {}}
              >
                Sathishkumar B
              </motion.a>
              <p className="text-sm text-muted-foreground mt-1">Data Analyst</p>
            </div>
          </FadeInOnScroll>

          {/* Social Links */}
          <FadeInOnScroll delay={0.1} direction="up">
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  whileHover={!shouldReduceMotion ? { y: -3, scale: 1.1 } : {}}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </FadeInOnScroll>

          {/* Copyright */}
          <FadeInOnScroll delay={0.2} direction="up">
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Made with{" "}
                <motion.span
                  animate={!shouldReduceMotion ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-destructive" />
                </motion.span>{" "}
                in Tamil Nadu
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </footer>
  );
};

export default Footer;