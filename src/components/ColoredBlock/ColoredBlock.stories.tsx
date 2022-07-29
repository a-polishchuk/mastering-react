import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ColoredBlock, ColoredBlockProps } from './ColoredBlock';

export default {
  component: ColoredBlock,
} as ComponentMeta<typeof ColoredBlock>;

const Template: ComponentStory<typeof ColoredBlock> = ({
  children,
  ...args
}: ColoredBlockProps) => (
  <ColoredBlock {...args} onClick={action('click')}>
    {children}
  </ColoredBlock>
);

export const Default = Template.bind({});
Default.storyName = 'ColoredBlock';
Default.args = {
  children: 'Colored block with a simple text inside',
};
