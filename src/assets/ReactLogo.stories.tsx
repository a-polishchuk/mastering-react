import type { Meta, StoryObj } from '@storybook/react';
import { ReactLogo } from './ReactLogo';

export default {
  component: ReactLogo,
} as Meta<typeof ReactLogo>;

type Story = StoryObj<typeof ReactLogo>;

export const Default: Story = {
  args: {
    size: 150,
    color: '#61dafb',
  },
};
