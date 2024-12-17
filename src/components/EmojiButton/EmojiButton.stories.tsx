import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { EmojiButton, EmojiButtonProps } from './EmojiButton';

export default {
  component: EmojiButton,
} as Meta<typeof EmojiButton>;

type Story = StoryObj<typeof EmojiButton>;

const render = (args: EmojiButtonProps) => <EmojiButton {...args} onClick={action('click')} />;

export const Default: Story = {
  args: {
    emoji: '✅',
    disabled: false,
  },
  render,
};

export const WithTooltip: Story = {
  args: {
    emoji: '✅',
    tooltip: 'Apply',
    disabled: false,
  },
  render,
};

export const Disabled: Story = {
  args: {
    emoji: '✅',
    disabled: true,
  },
  render,
};
