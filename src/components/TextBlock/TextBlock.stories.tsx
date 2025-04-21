import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from './TextBlock';

const TEXT = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.
    `;

export default {
    component: TextBlock,
} as Meta<typeof TextBlock>;

type Story = StoryObj<typeof TextBlock>;

export const Default: Story = {
    args: {
        children: TEXT,
        type: 'default',
    },
};

export const Info: Story = {
    args: {
        children: TEXT,
        type: 'info',
    },
};

export const Success: Story = {
    args: {
        children: TEXT,
        type: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: TEXT,
        type: 'warning',
    },
};

export const Error: Story = {
    args: {
        children: TEXT,
        type: 'error',
    },
};
