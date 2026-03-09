import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

export type BackgroundTheme = 'stars' | 'matrix';
export type UIMode = 'dark' | 'light';

interface ThemeContextType {
  backgroundTheme: BackgroundTheme;
  setBackgroundTheme: (theme: BackgroundTheme) => void;
  uiMode: UIMode;
  toggleUIMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('backgroundTheme');
      return (saved as BackgroundTheme) === 'matrix' ? 'matrix' : 'stars';
    }
    return 'stars';
  });

  const [uiMode, setUIMode] = useState<UIMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('uiMode');
      return (saved as UIMode) || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('backgroundTheme', backgroundTheme);
  }, [backgroundTheme]);

  useEffect(() => {
    localStorage.setItem('uiMode', uiMode);
    if (uiMode === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [uiMode]);

  const toggleUIMode = useCallback(() => {
    setUIMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ backgroundTheme, setBackgroundTheme, uiMode, toggleUIMode }}>
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
  stars: 'Moving Stars',
  matrix: 'Matrix Rain',
};
