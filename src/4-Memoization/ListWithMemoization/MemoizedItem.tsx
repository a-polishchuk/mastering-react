import classNames from 'classnames';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { memo } from 'react';
import { ItemData } from '../ItemData';
import classes from './MemoizedItem.module.css';

type Props = {
  item: ItemData;
  selected: boolean;
  onClick: (item: ItemData) => void;
};

function Item({ item, selected, onClick }: Props) {
  const { emoji } = item;
  const className = classNames(classes.item, selected && classes.selected);

  useLoggedLifecycle(emoji);

  return (
    <div className={className} onClick={() => onClick(item)}>
      {emoji}
    </div>
  );
}

export const MemoizedItem = memo(Item);
