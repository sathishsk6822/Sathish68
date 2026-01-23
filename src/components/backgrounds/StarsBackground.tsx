import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const StarsBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      startX: Math.random() * 50,
      startY: Math.random() * 30,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 10 + i * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={
            !shouldReduceMotion
              ? {
                  opacity: [star.opacity, star.opacity * 1.5, star.opacity],
                  scale: [1, 1.2, 1],
                  x: [0, (Math.random() - 0.5) * 50, 0],
                }
              : {}
          }
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Shooting stars */}
      {!shouldReduceMotion &&
        shootingStars.map((star) => (
          <motion.div
            key={`shooting-${star.id}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              boxShadow: '0 0 6px 2px hsl(var(--primary))',
            }}
            animate={{
              x: [0, 300],
              y: [0, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              repeatDelay: 8,
              ease: 'easeOut',
            }}
          >
            {/* Trail */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-px bg-gradient-to-l from-primary/50 to-transparent" />
          </motion.div>
        ))}

      {/* Nebula glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px]" />
    </div>
  );
};

export default StarsBackground;
