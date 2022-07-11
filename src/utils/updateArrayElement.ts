/**
 * Updates an array element with specified index.
 * @return New copy of array.
 */
export function updateArrayElement<T>(array: T[], indexToUpdate: number, newValue: T): T[] {
  return array.map((value, index) => (index === indexToUpdate ? newValue : value));
}
