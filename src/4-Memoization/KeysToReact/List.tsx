import { useCallback, useState } from 'react';

import { Item } from './Item';
import { ListItem } from './ListItem';

interface ListProps {
  generateItems: () => Item[];
  getKey: (item: Item, index: number) => string | number;
}

export function List({ generateItems, getKey }: ListProps): JSX.Element {
  const [items, setItems] = useState<Item[]>(generateItems);

  const removeItem = useCallback((itemToRemove: Item) => {
    setItems((array) => {
      return array.filter((item) => item.id !== itemToRemove.id);
    });
  }, []);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {items.map((item, index) => (
        <ListItem key={getKey(item, index)} item={item} onClick={removeItem} />
      ))}
    </div>
  );
}
