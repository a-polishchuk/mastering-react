function getRandomColorValue(): string {
  const numVal = Math.round(100 + Math.random() * 100);
  const stringVal = numVal.toString(16);

  return stringVal.length < 2 ? '0' + stringVal : stringVal;
}

export function getRandomColor(): string {
  const r = getRandomColorValue();
  const g = getRandomColorValue();
  const b = getRandomColorValue();

  return `#${r}${g}${b}`;
}
