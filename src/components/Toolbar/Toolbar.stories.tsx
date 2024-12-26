import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { Toolbar } from './Toolbar';

export default {
  component: Toolbar,
} as Meta<typeof Toolbar>;

type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button text="Some button" onClick={action('onSomeButtonClick')} />
        <Button text="Another button" onClick={action('onAnotherButtonClick')} disabled />
        <input defaultValue="Input also can be toolbar's child" />
      </>
    ),
  },
};
