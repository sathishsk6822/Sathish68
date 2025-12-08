import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, FileText, ChevronRight } from "lucide-react";
import HeroParticles from "./HeroParticles";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific particles */}
      <HeroParticles />
      
      {/* Gradient orbs with enhanced animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
        animate={!shouldReduceMotion ? {
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]"
        animate={!shouldReduceMotion ? {
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.2, 0.15],
        } : {}}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Glass panel behind content */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] max-w-5xl mx-auto">
        <div className="absolute inset-0 glass-panel rounded-3xl opacity-30" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Sathishkumar</span>
            <br />
            <motion.span
              className="text-foreground inline-block"
              animate={!shouldReduceMotion ? { y: [0, -5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Data Analyst
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I turn raw data into actionable insights using{" "}
            <span className="text-primary font-medium">Excel</span>,{" "}
            <span className="text-primary font-medium">SQL</span>,{" "}
            <span className="text-primary font-medium">Power BI</span> &{" "}
            <span className="text-primary font-medium">Python</span>.
            Crafting dashboards that drive data-driven decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div variants={buttonVariants}>
              <Button variant="hero" size="lg" asChild className="group">
                <a href="#projects">
                  View Projects
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button variant="heroOutline" size="lg" asChild className="group">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Button variant="heroOutline" size="lg" asChild className="group">
                <a
                  href="https://www.linkedin.com/in/sathish-kumar-507740321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={!shouldReduceMotion ? { y: [0, 8, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs mb-2">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;