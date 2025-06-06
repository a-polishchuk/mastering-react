import { ColoredBlock, RendersCounter } from 'components';
import { memo } from 'react';
import { Item } from './Item';

type ListItemProps = {
    item: Item;
    onClick: (item: Item) => void;
};

export const ListItem = memo(({ item, onClick }: ListItemProps) => (
    <RendersCounter>
        <ColoredBlock onClick={() => onClick(item)}>{item.value}</ColoredBlock>
    </RendersCounter>
));
