import classNames from 'classnames';
import classes from './Tabs.module.css';

export interface TabsHeaderProps {
  tabs: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function TabsHeader(props: TabsHeaderProps): JSX.Element {
  const { tabs, selectedIndex, onSelect } = props;

  return (
    <div className={classes.header}>
      {tabs.map((tab, index) => {
        const className = classNames(
          classes.tabHeader,
          index === selectedIndex && classes.selected
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
