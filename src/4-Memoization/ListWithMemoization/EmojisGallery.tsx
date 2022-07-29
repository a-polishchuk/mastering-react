import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { useCallback, useState } from 'react';
import { logTagged } from 'utils/logTagged';

import { ItemData } from '../ItemData';
import classes from './EmojisGallery.module.css';
import { MemoizedItem } from './MemoizedItem';

export function EmojisGallery({ items }: { items: ItemData[] }): JSX.Element {
  const [selectedId, setSelectedId] = useState<string>('');

  useLoggedLifecycle('Gallery');

  const memoizedCallback = useCallback((item: ItemData) => {
    setSelectedId(item.id);
    logTagged(item.emoji, 'Selected');
  }, []);

  // ! basically, same behaviour can be achieved with useMemo hook instead of useCallback

  // const alsoMemoizedCallback = useMemo(() => {
  //   const callback = (item: ItemData) => {
  //     setSelectedId(item.id);
  //     logTagged(item.emoji, 'Selected');
  //   };
  //   return callback;
  // }, []);

  return (
    <div className={classes.gallery}>
      {items.map((item) => (
        <MemoizedItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onClick={memoizedCallback}
        />
      ))}
    </div>
  );
}
