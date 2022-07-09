import { generateUniqueId } from 'utils/generateUniqueId';

export interface Item {
  id: string;
  value: number;
}

export function generateItems(length: number): Item[] {
  const array: Item[] = new Array<Item>(length);

  for (let i = 0; i < length; i++) {
    array[i] = {
      id: generateUniqueId(),
      value: i + 1,
    };
  }

  return array;
}
