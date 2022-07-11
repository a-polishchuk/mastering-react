import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { useCallback } from 'react';
import { logTagged } from 'utils/logTagged';

import { ItemData } from '../ItemData';
import { MemoizedItem } from './MemoizedItem';

export function List({ items }: { items: ItemData[] }): JSX.Element {
  useLoggedLifecycle('List');

  const memoizedCallback = useCallback((item: ItemData) => {
    logTagged('Clicked', JSON.stringify(item));
  }, []);

  return (
    <ol>
      {items.map((item) => (
        <MemoizedItem key={item.id} data={item} onClick={memoizedCallback} />
      ))}
    </ol>
  );
}
