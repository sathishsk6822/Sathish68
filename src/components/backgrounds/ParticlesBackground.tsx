import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const ParticlesBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? 'primary' : 'accent',
    }));
  }, []);

  const connections = useMemo(() => {
    const conns: { id: string; x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 15) {
          conns.push({
            id: `${i}-${j}`,
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
          });
        }
      }
    }
    return conns;
  }, [particles]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/5 to-background" />

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn) => (
          <motion.line
            key={conn.id}
            x1={`${conn.x1}%`}
            y1={`${conn.y1}%`}
            x2={`${conn.x2}%`}
            y2={`${conn.y2}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.1"
            animate={
              !shouldReduceMotion
                ? {
                    strokeOpacity: [0.05, 0.15, 0.05],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.color === 'primary' ? 'bg-primary' : 'bg-accent'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={
            !shouldReduceMotion
              ? {
                  x: [0, (Math.random() - 0.5) * 100, 0],
                  y: [0, (Math.random() - 0.5) * 100, 0],
                  scale: [1, 1.2, 1],
                  opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                }
              : {}
          }
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"
        animate={!shouldReduceMotion ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-accent/5 rounded-full blur-[80px]"
        animate={!shouldReduceMotion ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
    </div>
  );
};

export default ParticlesBackground;
