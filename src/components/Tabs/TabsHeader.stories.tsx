import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Case, Switch } from '../Switch/Switch';
import { TextBlock } from '../TextBlock/TextBlock';
import { TabsHeader, TabsHeaderProps } from './TabsHeader';

const TABS: string[] = ['First', 'Second', 'Third'];

export default {
  component: TabsHeader,
} as ComponentMeta<typeof TabsHeader>;

export const Default: ComponentStory<typeof TabsHeader> = (args: TabsHeaderProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <TabsHeader {...args} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      <div style={{ marginTop: 10 }}>
        {selectedIndex === 0 ? (
          <TextBlock>First tab content</TextBlock>
        ) : selectedIndex === 1 ? (
          <TextBlock>Second tab content</TextBlock>
        ) : selectedIndex === 2 ? (
          <TextBlock>Third tab content</TextBlock>
        ) : null}
      </div>
    </>
  );
};

Default.storyName = 'Tabs Header';
Default.args = {
  tabs: TABS,
};

export const TabsWithSwitch: ComponentStory<typeof TabsHeader> = (args: TabsHeaderProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      <TabsHeader {...args} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      <div style={{ marginTop: 10 }}>
        <Switch value={selectedIndex}>
          <Case value={0}>
            <TextBlock>1️⃣ First tab content</TextBlock>
          </Case>
          <Case value={1}>
            <TextBlock>2️⃣ Second tab content</TextBlock>
          </Case>
          <Case value={2}>
            <TextBlock>3️⃣ Third tab content</TextBlock>
          </Case>
        </Switch>
      </div>
    </>
  );
};

TabsWithSwitch.args = {
  tabs: TABS,
};
