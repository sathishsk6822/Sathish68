import { useTheme } from '@/contexts/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const BlobsBackground = lazy(() => import('./BlobsBackground'));
const StarsBackground = lazy(() => import('./StarsBackground'));
const ZigzagBackground = lazy(() => import('./ZigzagBackground'));
const MatrixBackground = lazy(() => import('./MatrixBackground'));
const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

const AnimatedBackground = () => {
  const { backgroundTheme } = useTheme();

  const backgrounds = {
    blobs: BlobsBackground,
    stars: StarsBackground,
    zigzag: ZigzagBackground,
    matrix: MatrixBackground,
    particles: ParticlesBackground,
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
