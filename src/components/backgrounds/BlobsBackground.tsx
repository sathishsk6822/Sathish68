import { motion, useReducedMotion } from 'framer-motion';

const BlobsBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 50%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Primary blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ backgroundColor: 'hsl(var(--primary) / 0.15)' }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, 100, -50, 0],
                y: [0, -80, 50, 0],
                scale: [1, 1.2, 0.9, 1],
              }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accent blob */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ backgroundColor: 'hsl(var(--accent) / 0.12)' }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, -80, 60, 0],
                y: [0, 60, -40, 0],
                scale: [1, 0.9, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full blur-[80px]"
        style={{ backgroundColor: 'hsl(var(--primary) / 0.08)' }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, 60, -80, 0],
                y: [0, -60, 80, 0],
                scale: [1, 1.1, 0.95, 1],
              }
            : {}
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full blur-[60px]"
        style={{ backgroundColor: 'hsl(var(--accent) / 0.1)' }}
        animate={
          !shouldReduceMotion
            ? {
                x: [0, -40, 60, 0],
                y: [0, 50, -30, 0],
                scale: [1, 1.15, 0.9, 1],
              }
            : {}
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, hsl(var(--background)) 80%)',
        }}
      />
    </div>
  );
};

export default BlobsBackground;
