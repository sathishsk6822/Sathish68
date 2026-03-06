import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const MatrixBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const columns = useMemo(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: i * 2, // 0 to 98%
      chars: Array.from({ length: Math.floor(Math.random() * 15 + 10) }, () => chars[Math.floor(Math.random() * chars.length)]),
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.4 + 0.1,
      fontSize: Math.random() * 4 + 14,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-secondary/10" />

      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 flex flex-col items-center"
          style={{
            left: `${column.x}%`,
            fontSize: column.fontSize,
            fontFamily: 'monospace',
            opacity: column.opacity,
            textOrientation: 'upright',
          }}
          initial={{ y: '-100%' }}
          animate={
            !shouldReduceMotion
              ? { y: ['-100%', '100vh'] }
              : { y: '10%' }
          }
          transition={{
            duration: column.duration,
            repeat: Infinity,
            delay: column.delay,
            ease: 'linear',
          }}
        >
          {column.chars.map((char, charIndex) => {
            const isLeading = charIndex === column.chars.length - 1;
            return (
              <span
                key={charIndex}
                className="leading-none"
                style={{
                  opacity: (charIndex + 1) / column.chars.length,
                  color: isLeading ? 'hsl(var(--foreground))' : 'hsl(var(--primary))',
                  textShadow: isLeading ? '0 0 8px hsl(var(--foreground))' : 'none',
                }}
              >
                {char}
              </span>
            );
          })}
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background))_100%)] opacity-90" />
    </div>
  );
};

export default MatrixBackground;
