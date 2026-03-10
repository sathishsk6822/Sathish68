import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, ChevronRight } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import HeroParticles from "./HeroParticles";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

const ROLES = ['Data Analyst', 'BI Specialist', 'Data Scientist','Prompt Engineer'];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { currentText } = useTypingAnimation({
    words: ROLES,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000,
  });

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

  const getResumeDownloadUrl = () => {
    if (typeof window === "undefined") return "/Sathishkumar-Analyst.pdf";

    const resumeUrl = new URL("/resume.pdf", window.location.origin);
    const previewToken = new URLSearchParams(window.location.search).get("__lovable_token");

    if (previewToken) {
      resumeUrl.searchParams.set("__lovable_token", previewToken);
    }

    return resumeUrl.toString();
  };

  const resumeDownloadUrl = getResumeDownloadUrl();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
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
              <span className="text-sm text-muted-foreground">Transforming Raw Data into Business Value</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sathishkumar</span>
              <br />
              <span className="text-foreground inline-block min-h-[1.2em]">
                {currentText}
                <motion.span
                  className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Specializing in <span className="text-primary font-medium">Business Intelligence</span> and <span className="text-primary font-medium">Predictive Analytics</span>. I bridge the gap between complex datasets and strategic growth using Power BI, SQL, and advanced Python modeling.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <motion.div variants={buttonVariants}>
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="#/projects">
                    View Projects
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button variant="heroOutline" size="lg" asChild className="group">
                  <a
                    href={resumeDownloadUrl}
                    download="Sathishkumar_B_Resume.pdf"
                  >
                    <FileText className="w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button variant="heroOutline" size="lg" asChild className="group">
                  <a
                    href="https://linkedin.com/in/sathishkumar-b-507740321"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.div
              className="relative"
              animate={!shouldReduceMotion ? { y: [0, -10, 0] } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-56 h-64 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 bg-muted/20">
                <img
                  src={profilePhoto}
                  alt="Sathishkumar B - Data Analyst"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 animate-pulse-glow" />
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
