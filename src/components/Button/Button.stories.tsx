import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: 'Button',
    disabled: false,
    onClick: action('click action'),
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
    onClick: action('click'),
  },
};
