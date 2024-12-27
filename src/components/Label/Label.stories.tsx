import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

export default {
    component: Label,
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: 'Label',
    },
};
