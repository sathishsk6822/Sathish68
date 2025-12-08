import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 data-dots opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#" className="text-xl font-heading font-bold gradient-text">
              Sathishkumar B
            </a>
            <p className="text-sm text-muted-foreground mt-1">Data Analyst</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.linkedin.com/in/sathish-kumar-507740321"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sathishbalask67@gmail.com"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919585796149"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-destructive" /> in Tamil Nadu
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
