import type { Meta, StoryObj } from '@storybook/react';
import { FlexRow } from './FlexRow';

export default {
    component: FlexRow,
} as Meta<typeof FlexRow>;

type Story = StoryObj<typeof FlexRow>;

export const Default: Story = {
    args: {
        children: 'FlexRow content',
    },
};
