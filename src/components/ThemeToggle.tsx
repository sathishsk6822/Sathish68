import { motion } from 'framer-motion';
import { Sparkles, Stars, Zap, Binary, CircleDot } from 'lucide-react';
import { useTheme, BackgroundTheme, THEME_NAMES } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const THEME_ICONS: Record<BackgroundTheme, React.ComponentType<{ className?: string }>> = {
  blobs: Sparkles,
  stars: Stars,
  zigzag: Zap,
  matrix: Binary,
  particles: CircleDot,
};

const ThemeToggle = () => {
  const { backgroundTheme, setBackgroundTheme } = useTheme();

  const CurrentIcon = THEME_ICONS[backgroundTheme];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all"
        >
          <motion.div
            key={backgroundTheme}
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentIcon className="h-5 w-5 text-primary" />
          </motion.div>
          <span className="sr-only">Toggle background theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-panel border-border/50">
        {(Object.keys(THEME_NAMES) as BackgroundTheme[]).map((theme) => {
          const Icon = THEME_ICONS[theme];
          const isActive = backgroundTheme === theme;
          return (
            <DropdownMenuItem
              key={theme}
              onClick={() => setBackgroundTheme(theme)}
              className={`flex items-center gap-3 cursor-pointer ${
                isActive ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{THEME_NAMES[theme]}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-2 h-2 rounded-full bg-primary"
                />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
