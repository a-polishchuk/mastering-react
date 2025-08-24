function colorValue(): string {
    const numVal = Math.round(100 + Math.random() * 100);
    const stringVal = numVal.toString(16);

    return stringVal.length < 2 ? '0' + stringVal : stringVal;
}

/**
 * Generates a random hex color string
 * @returns A hex color string in format #RRGGBB
 * @example
 * generateRandomColor() // Returns something like "#7f8f9a"
 */
export function generateRandomColor(): string {
    const r = colorValue();
    const g = colorValue();
    const b = colorValue();

    return `#${r}${g}${b}`;
}
