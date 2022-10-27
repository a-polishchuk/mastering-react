import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { TextBlock } from '../TextBlock/TextBlock';
import { Tabs, TabsProps } from './Tabs';

const TABS: string[] = ['First', 'Second', 'Third'];

export default {
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS[0]);

  return (
    <>
      <Tabs {...args} selectedTab={selectedTab} onSelectedTabChange={setSelectedTab} />
      <div style={{ marginTop: 10 }}>
        {selectedTab === TABS[0] ? (
          <TextBlock>First tab content</TextBlock>
        ) : selectedTab === TABS[1] ? (
          <TextBlock>Second tab content</TextBlock>
        ) : selectedTab === TABS[2] ? (
          <TextBlock>Third tab content</TextBlock>
        ) : null}
      </div>
    </>
  );
};

Default.storyName = 'Tabs';
Default.args = {
  tabs: TABS,
};
