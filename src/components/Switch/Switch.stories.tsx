import type { Meta, StoryObj } from '@storybook/react';
import { Case, Switch } from './Switch';

export default {
  component: Switch,
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

function Emoji({ children }: { children: string }) {
  return <span style={{ fontSize: 32 }}>{children}</span>;
}

export const Default: Story = {
  args: {
    value: 25,
    children: [
      <Case condition={(value: number) => value > 0}>
        <Emoji>🌞</Emoji>
      </Case>,
      <Case condition={(value: number) => value > 25}>
        <Emoji>🌞🌞</Emoji>
      </Case>,
      <Case condition={(value: number) => value > 30}>
        <Emoji>🔥</Emoji>
      </Case>,
      <Case condition={(value: number) => value > 35}>
        <Emoji>🔥🔥🔥</Emoji>
      </Case>,
    ],
  },
};
