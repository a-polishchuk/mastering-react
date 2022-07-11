import { useCallback, useState } from 'react';

import { Item } from './Item';
import classes from './KeysAndLists.module.css';
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
    <div className={classes.list}>
      {items.map((item, index) => (
        <ListItem key={getKey(item, index)} item={item} onClick={removeItem} />
      ))}
    </div>
  );
}
