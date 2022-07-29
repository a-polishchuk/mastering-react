import { ColoredBlock } from 'components';
import { memo } from 'react';

import { Item } from './Item';

interface ListItemProps {
  item: Item;
  onClick: (item: Item) => void;
}

export const ListItem = memo(
  ({ item, onClick }: ListItemProps): JSX.Element => (
    <ColoredBlock onClick={() => onClick(item)}>{item.value}</ColoredBlock>
  )
);
