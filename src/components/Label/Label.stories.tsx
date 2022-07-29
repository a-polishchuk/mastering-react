import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label, LabelProps } from './Label';

export default {
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Label';
Default.args = {
  text: 'Label',
};
