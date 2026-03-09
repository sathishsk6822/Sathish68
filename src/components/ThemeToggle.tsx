import { motion } from 'framer-motion';
import { Stars, Binary, Sun, Moon, Palette } from 'lucide-react';
import { useTheme, BackgroundTheme, THEME_NAMES } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

const THEME_ICONS: Record<BackgroundTheme, React.ComponentType<{ className?: string }>> = {
  stars: Stars,
  matrix: Binary,
};

const ThemeToggle = () => {
  const { backgroundTheme, setBackgroundTheme, uiMode, toggleUIMode } = useTheme();

  const CurrentIcon = THEME_ICONS[backgroundTheme];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative w-10 h-10 rounded-full bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/30 transition-all shadow-glow"
        >
          <motion.div
            key={`${backgroundTheme}-${uiMode}`}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <Palette className="h-5 w-5 text-primary" />
          </motion.div>
          <span className="sr-only">Toggle theme and mode</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-panel border-border/50 w-48 p-2">
        <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground px-2 py-1.5">
          Background Style
        </DropdownMenuLabel>
        {(Object.keys(THEME_NAMES) as BackgroundTheme[]).map((theme) => {
          const Icon = THEME_ICONS[theme];
          const isActive = backgroundTheme === theme;
          return (
            <DropdownMenuItem
              key={theme}
              onClick={() => setBackgroundTheme(theme)}
              className={`flex items-center gap-3 cursor-pointer rounded-lg mb-1 ${isActive ? 'text-primary bg-primary/10 font-medium' : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <Icon className="h-4 w-4" />
              <span>{THEME_NAMES[theme]}</span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                />
              )}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator className="bg-border/50 my-2" />

        <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground px-2 py-1.5">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={toggleUIMode}
          className="flex items-center gap-3 cursor-pointer rounded-lg text-muted-foreground hover:text-foreground"
        >
          {uiMode === 'dark' ? (
            <>
              <Sun className="h-4 w-4" />
              <span>Black & White</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span>Dynamic Dark</span>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
