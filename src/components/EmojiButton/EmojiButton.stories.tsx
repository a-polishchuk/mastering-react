import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { EmojiButton, EmojiButtonProps } from './EmojiButton';

export default {
    component: EmojiButton,
} as Meta<typeof EmojiButton>;

type Story = StoryObj<typeof EmojiButton>;

const render = (args: EmojiButtonProps) => <EmojiButton {...args} />;

export const Default: Story = {
    args: {
        emoji: '✅',
        disabled: false,
        onClick: fn(),
    },
    render,
};

export const WithTooltip: Story = {
    args: {
        emoji: '✅',
        tooltip: 'Apply',
        disabled: false,
        onClick: fn(),
    },
    render,
};

export const Disabled: Story = {
    args: {
        emoji: '✅',
        disabled: true,
        onClick: fn(),
    },
    render,
};
