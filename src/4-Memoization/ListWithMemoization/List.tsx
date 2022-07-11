import { useCallback } from 'react';

import { ItemData } from '../ItemData';
import { MemoizedItem } from './MemoizedItem';

export function List({ items }: { items: ItemData[] }): JSX.Element {
  const memoizedCallback = useCallback((item: ItemData) => {
    console.log(`clicked item with id ${item.id}`);
  }, []);

  console.log('render List');

  return (
    <ol>
      {items.map((item) => (
        <MemoizedItem key={item.id} data={item} onClick={memoizedCallback} />
      ))}
    </ol>
  );
}
