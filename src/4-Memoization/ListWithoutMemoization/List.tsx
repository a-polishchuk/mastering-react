import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { logTagged } from 'utils/logTagged';
import { ItemData } from '../ItemData';
import { Item } from './Item';

export function List({ items }: { items: ItemData[] }): JSX.Element {
  useLoggedLifecycle('List');

  const clickCallback = (item: ItemData) => {
    logTagged('Clicked', JSON.stringify(item));
  };

  return (
    <ol>
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={clickCallback} />
      ))}
    </ol>
  );
}
