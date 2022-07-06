export function getRandomArrayElement<T>(array: T[]): T {
  const randomIndex = Math.round(Math.random() * (array.length - 1));

  return array[randomIndex];
}
