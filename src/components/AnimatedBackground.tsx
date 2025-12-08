import { motion, useReducedMotion } from "framer-motion";

const AnimatedBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Radial gradients in corners */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-primary/8 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 bg-gradient-radial from-accent/8 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] translate-y-1/3 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] translate-x-1/3 translate-y-1/3 bg-gradient-radial from-accent/6 via-transparent to-transparent blur-3xl" />

      {/* Animated blobs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]"
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />
    </div>
  );
};

export default AnimatedBackground;