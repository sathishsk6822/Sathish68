import { useTheme } from '@/contexts/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const StarsBackground = lazy(() => import('./StarsBackground'));
const MatrixBackground = lazy(() => import('./MatrixBackground'));

const AnimatedBackground = () => {
  const { backgroundTheme } = useTheme();

  const backgrounds = {
    stars: StarsBackground,
    matrix: MatrixBackground,
  };

  const BackgroundComponent = backgrounds[backgroundTheme];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={backgroundTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<div className="fixed inset-0 bg-background -z-10" />}>
          <BackgroundComponent />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedBackground;
