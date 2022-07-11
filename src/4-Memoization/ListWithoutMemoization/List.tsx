import { ItemData } from '../ItemData';
import { Item } from './Item';

export function List({ items }: { items: ItemData[] }): JSX.Element {
  const clickCallback = (item: ItemData) => {
    console.log(`clicked item with id ${item.id}`);
  };

  console.log('render List');

  return (
    <ol>
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={clickCallback} />
      ))}
    </ol>
  );
}
