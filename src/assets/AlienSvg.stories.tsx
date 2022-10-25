import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlienSvg, AlienSvgProps } from './AlienSvg';

export default {
  component: AlienSvg,
} as ComponentMeta<typeof AlienSvg>;

const Template: ComponentStory<typeof AlienSvg> = (args: AlienSvgProps) => <AlienSvg {...args} />;

export const Default = Template.bind({});
Default.storyName = 'AlienSvg';
Default.args = {
  size: 150,
  eyesColor: '#242424',
  mouthColor: '#242424',
  fillColor: '#ccd6dd',
};
