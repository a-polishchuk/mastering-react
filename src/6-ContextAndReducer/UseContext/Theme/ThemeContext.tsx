import { createContext, ReactNode, useContext, useState } from 'react';

import { generateThemes, Theme } from './Theme';

export interface ThemesPalette {
  themes: Theme[];
  themeIndex: number;
}

export type ThemeContextState = [ThemesPalette, (themeIndex: number) => void];

const defaultValue: ThemeContextState = [
  {
    themes: [],
    themeIndex: -1,
  },
  (themeIndex: number) => {},
];

const ThemeContext = createContext<ThemeContextState>(defaultValue);

export function useThemeContext(): ThemeContextState {
  const theme = useContext(ThemeContext);
  if (!theme) {
    // TODO: check it
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  return theme;
}

export function useCurrentTheme(): Theme {
  const [{ themes, themeIndex }] = useThemeContext();
  return themes[themeIndex];
}

function generatePalette(): ThemesPalette {
  return {
    themes: generateThemes(10),
    themeIndex: 0,
  };
}

export function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [state, setState] = useState<ThemesPalette>(generatePalette);

  const setThemeIndex = (themeIndex: number) => {
    setState((value) => ({
      ...value,
      themeIndex,
    }));
  };

  return <ThemeContext.Provider value={[state, setThemeIndex]}>{children}</ThemeContext.Provider>;
}
