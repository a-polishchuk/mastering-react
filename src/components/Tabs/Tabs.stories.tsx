import type { Meta, StoryObj } from '@storybook/react';

import { TextBlock } from '../TextBlock/TextBlock';
import { Tabs } from './Tabs';

export default {
  component: Tabs,
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: ['Animals', 'Food', 'Zodiac'],
  },
  render: (args) => (
    <Tabs {...args}>
      <TextBlock>🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼</TextBlock>
      <TextBlock>🍕 🌮 🍔 🍟 🌭 🍿 🥪 🥨</TextBlock>
      <TextBlock>♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️</TextBlock>
    </Tabs>
  ),
};
