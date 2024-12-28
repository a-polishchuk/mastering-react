import { cn } from 'utils/cn';
import classes from './Tabs.module.css';

export type TabsHeaderProps = {
    tabs: string[];
    selectedIndex: number;
    onSelect: (index: number) => void;
};

export function TabsHeader(props: TabsHeaderProps) {
    const { tabs, selectedIndex, onSelect } = props;

    return (
        <div className={classes.header}>
            {tabs.map((tab, index) => {
                const className = cn(
                    classes.tabHeader,
                    index === selectedIndex && classes.selected,
                );
                return (
                    <div key={tab} className={className} onClick={() => onSelect(index)}>
                        {tab}
                    </div>
                );
            })}
        </div>
    );
}
