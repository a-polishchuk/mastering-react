import type { Meta, StoryObj } from '@storybook/react';
import { PropsTable } from './PropsTable';

export default {
  component: PropsTable,
} as Meta<typeof PropsTable>;

type Story = StoryObj<typeof PropsTable>;

export const Default: Story = {
  args: {
    title: 'Title',
    data: {
      firstName: 'John',
      lastName: 'Wick',
      age: '45',
      job: {
        title: 'killer',
        status: 'freelancer',
      },
    },
  },
};
