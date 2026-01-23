import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const MatrixBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const columns = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i / 30) * 100 + Math.random() * 2,
      chars: Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)]),
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
      fontSize: Math.random() * 8 + 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />

      {/* Matrix rain */}
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute top-0 flex flex-col items-center"
          style={{
            left: `${column.x}%`,
            fontSize: column.fontSize,
            fontFamily: 'monospace',
          }}
          initial={{ y: '-100%' }}
          animate={
            !shouldReduceMotion
              ? {
                  y: ['calc(-100%)', 'calc(100vh + 100%)'],
                }
              : { y: '10%' }
          }
          transition={{
            duration: column.duration,
            repeat: Infinity,
            delay: column.delay,
            ease: 'linear',
          }}
        >
          {column.chars.map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="text-primary leading-tight"
              style={{
                opacity: column.opacity * (1 - charIndex / column.chars.length),
                textShadow: charIndex === 0 ? '0 0 10px hsl(var(--primary))' : 'none',
              }}
              animate={
                !shouldReduceMotion
                  ? {
                      opacity: [
                        column.opacity * (1 - charIndex / column.chars.length),
                        column.opacity * (1 - charIndex / column.chars.length) * 1.5,
                        column.opacity * (1 - charIndex / column.chars.length),
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: charIndex * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      ))}

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default MatrixBackground;
