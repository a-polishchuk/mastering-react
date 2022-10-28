import { Children, ReactNode, useState } from 'react';

import classes from './Tabs.module.css';
import { TabsHeader } from './TabsHeader';

export interface TabsProps {
  tabs: string[];
  children: ReactNode;
}

export function Tabs({ tabs, children }: TabsProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const childArray = Children.toArray(children);
  const selectedTabContent = childArray[selectedIndex];

  return (
    <div className={classes.container}>
      <TabsHeader tabs={tabs} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      {selectedTabContent}
    </div>
  );
}
