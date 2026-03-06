import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useEffect, useState } from 'react';

const ParticlesBackground = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // %
      y: Math.random() * 100, // %
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      color: Math.random() > 0.5 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
            opacity: 0.6
          }}
          animate={!shouldReduceMotion ? {
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
          } : {}}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* A softly glowing orb tracking mouse position gently */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-20"
          style={{ background: 'hsl(var(--primary))', left: 0, top: 0 }}
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200,
          }}
          transition={{ type: "spring", stiffness: 20, damping: 15, mass: 1 }}
        />
      )}

    </div>
  );
};

export default ParticlesBackground;
