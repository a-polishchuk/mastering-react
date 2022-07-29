import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonProps } from './Button';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} onClick={action('click')} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  disabled: false,
};
