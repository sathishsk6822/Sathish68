import { useTheme } from '@/contexts/ThemeContext';
import BlobsBackground from './BlobsBackground';
import StarsBackground from './StarsBackground';
import ZigzagBackground from './ZigzagBackground';
import MatrixBackground from './MatrixBackground';
import ParticlesBackground from './ParticlesBackground';
import { AnimatePresence, motion } from 'framer-motion';

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
        <BackgroundComponent />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedBackground;
