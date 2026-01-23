import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const ZigzagBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const lines = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      y: i * 8 + 5,
      duration: Math.random() * 4 + 6,
      delay: i * 0.3,
      amplitude: Math.random() * 30 + 20,
      frequency: Math.random() * 2 + 3,
      opacity: Math.random() * 0.15 + 0.05,
      strokeWidth: Math.random() * 1.5 + 0.5,
    }));
  }, []);

  const generateZigzagPath = (amplitude: number, frequency: number) => {
    const points: string[] = [];
    const segments = 20;
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 120 - 10;
      const y = Math.sin((i / segments) * Math.PI * frequency) * amplitude + 50;
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ');
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Animated zig-zag lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>

        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={generateZigzagPath(line.amplitude, line.frequency)}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth={line.strokeWidth}
            strokeOpacity={line.opacity}
            strokeLinecap="round"
            style={{
              transform: `translateY(${line.y}%)`,
            }}
            animate={
              !shouldReduceMotion
                ? {
                    translateX: ['-10%', '10%', '-10%'],
                  }
                : {}
            }
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"
        animate={!shouldReduceMotion ? { scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-[60px]"
        animate={!shouldReduceMotion ? { scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  );
};

export default ZigzagBackground;
