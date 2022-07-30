import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Case, Switch, SwitchProps } from './Switch';

export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Default: ComponentStory<typeof Switch> = (args: SwitchProps<any>) => {
  return <Switch {...args} />;
};

Default.storyName = 'Switch';
Default.args = {
  value: 25,
  children: [
    <Case condition={(value: number) => value > 0}>
      <Emoji>🌞</Emoji>
    </Case>,
    <Case condition={(value: number) => value > 25}>
      <Emoji>🌞</Emoji>
    </Case>,
    <Case condition={(value: number) => value > 30}>
      <Emoji>🔥</Emoji>
    </Case>,
    <Case condition={(value: number) => value > 35}>
      <Emoji>☄️</Emoji>
    </Case>,
  ],
};

function Emoji({ children }: { children: string }): JSX.Element {
  return <span style={{ fontSize: 32 }}>{children}</span>;
}
