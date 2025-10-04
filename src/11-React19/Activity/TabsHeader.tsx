import { cn } from 'utils/cn';
import classes from './TabsHeader.module.css';
import { type TabItem } from './types';

type Props = {
    items: TabItem[];
    activeTabKey: string;
    onChange: (newTabKey: string) => void;
};

export function TabsHeader({ items, activeTabKey, onChange }: Props) {
    return (
        <div className={classes.tabs}>
            {items.map(({ tabKey, title }) => (
                <div
                    key={tabKey}
                    className={cn(
                        classes.tabTitle,
                        tabKey === activeTabKey && classes.activeTabTitle,
                    )}
                    onClick={() => onChange(tabKey)}
                >
                    {title}
                </div>
            ))}
        </div>
    );
}
