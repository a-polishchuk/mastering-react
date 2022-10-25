import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactLogo, ReactLogoProps } from './ReactLogo';

export default {
  component: ReactLogo,
} as ComponentMeta<typeof ReactLogo>;

const Template: ComponentStory<typeof ReactLogo> = (args: ReactLogoProps) => (
  <ReactLogo {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'ReactLogo';
Default.args = {
  size: 150,
  color: '#61dafb',
};
