import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextBlock } from '../TextBlock/TextBlock';
import { Tabs, TabsProps } from './Tabs';

const TABS: string[] = ['1️⃣ First', '2️⃣ Second', '3️⃣ Third'];

export default {
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = (args: TabsProps) => {
  return (
    <Tabs {...args}>
      <TextBlock>First tab content</TextBlock>
      <TextBlock>Second tab content</TextBlock>
      <TextBlock>Third tab content</TextBlock>
    </Tabs>
  );
};

Default.storyName = 'Tabs';
Default.args = {
  tabs: TABS,
};
