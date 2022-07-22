import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { useCallback, useState } from 'react';
import { logTagged } from 'utils/logTagged';

import { ItemData } from '../ItemData';
import classes from './EmojisGallery.module.css';
import { MemoizedItem } from './MemoizedItem';

export function EmojisGallery({ items }: { items: ItemData[] }): JSX.Element {
  const [selectedId, setSelectedId] = useState<string>('');

  useLoggedLifecycle('Gallery');

  const clickCallback = useCallback((item: ItemData) => {
    setSelectedId(item.id);
    logTagged(item.emoji, 'Selected');
  }, []);

  return (
    <div className={classes.gallery}>
      {items.map((item) => (
        <MemoizedItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onClick={clickCallback}
        />
      ))}
    </div>
  );
}
