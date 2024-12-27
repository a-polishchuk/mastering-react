function colorValue(): string {
    const numVal = Math.round(100 + Math.random() * 100);
    const stringVal = numVal.toString(16);

    return stringVal.length < 2 ? '0' + stringVal : stringVal;
}

export function generateRandomColor(): string {
    const r = colorValue();
    const g = colorValue();
    const b = colorValue();

    return `#${r}${g}${b}`;
}
