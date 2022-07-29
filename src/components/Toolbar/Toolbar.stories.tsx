import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button/Button';
import { Toolbar, ToolbarProps } from './Toolbar';

export default {
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args: ToolbarProps) => <Toolbar {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Toolbar';
Default.args = {
  children: (
    <>
      <Button text="Some button" onClick={action('some button clicked')} />
      <Button text="Another button" onClick={action('another button clicked')} disabled />
      <input defaultValue="Input also can be toolbar's child" />
    </>
  ),
};
