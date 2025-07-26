import { createContextHook } from 'hooks/createContextHook';
import { createContext, ReactNode, useState } from 'react';
import { generateThemes, Theme } from './Theme';

export type ThemesPalette = {
    themes: Theme[];
    themeIndex: number;
};

export type ThemeContextState = [ThemesPalette, (themeIndex: number) => void];

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

export const useThemeContext = createContextHook(ThemeContext, ThemeProvider);

export function useCurrentTheme(): Theme {
    const [{ themes, themeIndex }] = useThemeContext();
    return themes[themeIndex];
}

function generatePalette(): ThemesPalette {
    return {
        themes: generateThemes(15),
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
