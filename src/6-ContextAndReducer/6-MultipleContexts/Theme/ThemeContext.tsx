import { createContext, ReactNode, useContext, useState } from 'react';
import { generateThemes, Theme } from './Theme';

export type ThemesPalette = {
    themes: Theme[];
    themeIndex: number;
};

export type ThemeContextState = [ThemesPalette, (themeIndex: number) => void];

const defaultValue: any = null;
const ThemeContext = createContext<ThemeContextState>(defaultValue);

export function useThemeContext(): ThemeContextState {
    const theme = useContext(ThemeContext);
    if (!theme) {
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

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<ThemesPalette>(generatePalette);

    const setThemeIndex = (themeIndex: number) => {
        setState((value) => ({
            ...value,
            themeIndex,
        }));
    };

    return <ThemeContext.Provider value={[state, setThemeIndex]}>{children}</ThemeContext.Provider>;
}
