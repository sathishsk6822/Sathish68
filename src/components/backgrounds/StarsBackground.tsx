import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

const StarsBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const generateStars = (count: number, sizeMin: number, sizeMax: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (sizeMax - sizeMin) + sizeMin,
      opacity: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.8 ? 'hsl(var(--primary))' : '#ffffff'
    }));
  };

  const slowStars = useMemo(() => generateStars(150, 1, 1.5), []);
  const mediumStars = useMemo(() => generateStars(80, 1.5, 2.5), []);
  const fastStars = useMemo(() => generateStars(40, 2.5, 4), []);

  const StarLayer = ({ stars, duration }: { stars: any[], duration: number }) => (
    <div className="absolute inset-0 w-full h-full">
      <motion.div
        className="absolute inset-0 w-full h-[200%]"
        animate={!shouldReduceMotion ? { y: ['0%', '-50%'] } : {}}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* First Half */}
        <div className="relative w-full h-1/2">
          {stars.map((star) => (
            <div
              key={`a-${star.id}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 2}px ${star.color}`
              }}
            />
          ))}
        </div>
        {/* Second Half (Duplicate for looping) */}
        <div className="relative w-full h-1/2">
          {stars.map((star) => (
            <div
              key={`b-${star.id}`}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                backgroundColor: star.color,
                boxShadow: `0 0 ${star.size * 2}px ${star.color}`
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80" />

      <StarLayer stars={slowStars} duration={100} />
      <StarLayer stars={mediumStars} duration={60} />
      <StarLayer stars={fastStars} duration={30} />
    </div>
  );
};

export default StarsBackground;
