import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type BackgroundTheme = 'blobs' | 'stars' | 'zigzag' | 'matrix' | 'particles';

interface ThemeContextType {
  backgroundTheme: BackgroundTheme;
  setBackgroundTheme: (theme: BackgroundTheme) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEMES: BackgroundTheme[] = ['blobs', 'stars', 'zigzag', 'matrix', 'particles'];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('backgroundTheme');
      return (saved as BackgroundTheme) || 'blobs';
    }
    return 'blobs';
  });

  useEffect(() => {
    localStorage.setItem('backgroundTheme', backgroundTheme);
  }, [backgroundTheme]);

  const cycleTheme = useCallback(() => {
    setBackgroundTheme((current) => {
      const currentIndex = THEMES.indexOf(current);
      return THEMES[(currentIndex + 1) % THEMES.length];
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ backgroundTheme, setBackgroundTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const THEME_NAMES: Record<BackgroundTheme, string> = {
  blobs: 'Gradient Blobs',
  stars: 'Moving Stars',
  zigzag: 'Zig-Zag Lines',
  matrix: 'Matrix Rain',
  particles: 'Floating Particles',
};
