import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { useState } from 'react';
import { logTagged } from 'utils/logTagged';
import { ItemData } from '../ItemData';
import classes from './EmojisGallery.module.css';
import { Item } from './Item';

export function EmojisGallery({ items }: { items: ItemData[] }) {
    const [selectedId, setSelectedId] = useState<string>('');

    useLoggedLifecycle('Gallery');

    const clickCallback = (item: ItemData) => {
        setSelectedId(item.id);
        logTagged(item.emoji, 'Selected');
    };

    return (
        <div className={classes.gallery}>
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    selected={item.id === selectedId}
                    onClick={clickCallback}
                />
            ))}
        </div>
    );
}
