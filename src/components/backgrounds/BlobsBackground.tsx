import { motion, useReducedMotion } from 'framer-motion';

const BlobsBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      {/* Modern animated mesh gradient */}
      <motion.div
        className="absolute w-[80vw] h-[80vh] rounded-full mix-blend-screen opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          filter: 'blur(100px)'
        }}
        animate={
          !shouldReduceMotion
            ? {
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }
            : {}
        }
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[70vw] h-[70vh] rounded-full mix-blend-screen opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 80%)',
          bottom: '-20%',
          right: '-10%',
          filter: 'blur(120px)'
        }}
        animate={
          !shouldReduceMotion
            ? {
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }
            : {}
        }
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full mix-blend-screen opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          top: '30%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(90px)'
        }}
        animate={
          !shouldReduceMotion
            ? {
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              scale: [1, 0.8, 1.1, 1],
            }
            : {}
        }
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />

      {/* Grid overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[100px]" />
    </div>
  );
};

export default BlobsBackground;
