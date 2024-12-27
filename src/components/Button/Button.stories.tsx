import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
    component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: 'Button',
        disabled: false,
        onClick: fn(),
    },
};

export const Disabled: Story = {
    args: {
        text: 'Disabled Button',
        disabled: true,
        onClick: fn(),
    },
};
