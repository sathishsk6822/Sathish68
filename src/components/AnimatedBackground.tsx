import { motion, useReducedMotion } from "framer-motion";

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient with smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Enhanced radial gradients in corners */}
      <div className="absolute top-0 left-0 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary/12 via-primary/4 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] translate-x-1/3 -translate-y-1/3 bg-gradient-radial from-accent/12 via-accent/4 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] translate-y-1/3 bg-gradient-radial from-primary/8 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] translate-x-1/3 translate-y-1/3 bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" />
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl" />

      {/* Animated flowing blobs */}
      {!shouldReduceMotion && (
        <>
          {/* Primary blob - slow circular motion */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-[120px]"
            animate={{
              x: [0, 80, 40, 0],
              y: [0, 40, 80, 0],
              scale: [1, 1.1, 1.05, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Accent blob - counter motion */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent blur-[120px]"
            animate={{
              x: [0, -60, -30, 0],
              y: [0, -40, -70, 0],
              scale: [1, 1.15, 1.08, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          
          {/* Secondary blob - diagonal drift */}
          <motion.div
            className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-[100px]"
            animate={{
              x: [0, 50, -20, 0],
              y: [0, -40, 30, 0],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          
          {/* Small accent orb - faster pulse */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-radial from-accent/12 via-transparent to-transparent blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Bottom left orb */}
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-[350px] h-[350px] rounded-full bg-gradient-radial from-primary/8 via-transparent to-transparent blur-[90px]"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </>
      )}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 bg-noise opacity-[0.012]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
    </div>
  );
};

export default AnimatedBackground;