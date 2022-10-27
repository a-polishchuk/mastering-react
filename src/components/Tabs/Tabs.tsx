import classNames from 'classnames';
import classes from './Tabs.module.css';

export interface TabsProps {
  tabs: string[];
  selectedTab: string;
  onSelectedTabChange: (newSelectedTab: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element {
  const { tabs, selectedTab, onSelectedTabChange } = props;

  return (
    <div className={classes.container}>
      {tabs.map((tab) => {
        const className = classNames(classes.tab, tab === selectedTab && classes.selected);
        const onClick = () => onSelectedTabChange(tab);
        return (
          <div key={tab} className={className} onClick={onClick}>
            {tab}
          </div>
        );
      })}
    </div>
  );
}
