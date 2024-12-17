import type { Meta, StoryObj } from '@storybook/react';

import { TextBlock } from './TextBlock';

export default {
  component: TextBlock,
} as Meta<typeof TextBlock>;

type Story = StoryObj<typeof TextBlock>;

export const WithText: Story = {
  args: {
    children: 'Text block with a simple text.',
  },
};

export const WithList: Story = {
  args: {
    children: (
      <>
        Fruits list:
        <ol>
          <li>🍎 - apple</li>
          <li>🍐 - pear</li>
          <li>🍊 - orange</li>
          <li>🍋 - lemon</li>
          <li>🍌 - banana</li>
          <li>🍉 - watermelon</li>
          <li>🍇 - grapes</li>
          <li>🍓 - strawberry</li>
          <li>🫐 - blueberry</li>
          <li>🍒 - cherry</li>
          <li>🍍 - pineapple</li>
          <li>🥝 - kiwi</li>
        </ol>
      </>
    ),
  },
};
