import { Children, ReactNode, useState } from 'react';
import classes from './Tabs.module.css';
import { TabsHeader } from './TabsHeader';

export type TabsProps = {
    tabs: string[];
    children: ReactNode;
    onSelect?: (index: number) => void;
};

export function Tabs({ tabs, children, onSelect }: TabsProps) {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const childArray = Children.toArray(children);
    const selectedTabContent = childArray[selectedIndex];

    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        onSelect?.(index);
    };

    return (
        <div className={classes.container}>
            <TabsHeader tabs={tabs} selectedIndex={selectedIndex} onSelect={handleSelect} />
            {selectedTabContent}
        </div>
    );
}
