import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ColoredBlock } from './ColoredBlock';

export default {
  component: ColoredBlock,
} as Meta<typeof ColoredBlock>;

type Story = StoryObj<typeof ColoredBlock>;

export const Default: Story = {
  args: {
    children: 'Colored block with a simple text inside',
  },
  render: (args) => (
    <ColoredBlock {...args} onClick={action('click')}>
      {args.children}
    </ColoredBlock>
  ),
};
