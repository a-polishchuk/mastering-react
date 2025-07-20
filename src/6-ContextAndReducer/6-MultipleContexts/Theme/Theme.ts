import { generateRandomColor } from 'utils/generateRandomColor';

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
}

export function generateTheme(): Theme {
    const primaryColor = generateRandomColor();
    return {
        primaryColor,
        secondaryColor: primaryColor + '33',
    };
}

export function generateThemes(count: number): Theme[] {
    const themes = [];
    for (let i = 0; i < count; i++) {
        themes.push(generateTheme());
    }
    return themes;
}
