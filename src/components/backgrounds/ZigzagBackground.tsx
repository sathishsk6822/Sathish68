import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const ZigzagBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const streams = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4,
      height: Math.random() * 20 + 10, // vh
      opacity: Math.random() * 0.4 + 0.2,
      thickness: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'var(--primary)' : 'var(--accent)',
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)/0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2.5)',
        transformOrigin: 'top center'
      }} />

      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute opacity-0"
          style={{
            left: `${stream.x}%`,
            width: stream.thickness,
            height: `${stream.height}vh`,
            background: `linear-gradient(to bottom, transparent, hsl(${stream.color}), hsl(${stream.color}), transparent)`,
            boxShadow: `0 0 20px 2px hsl(${stream.color})`,
          }}
          animate={!shouldReduceMotion ? {
            top: [`-${stream.height}vh`, '120vh'],
            opacity: [0, stream.opacity, stream.opacity, 0],
          } : { opacity: stream.opacity, top: '50vh' }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-90" />
    </div>
  );
};

export default ZigzagBackground;
