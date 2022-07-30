import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { EmojiButton, EmojiButtonProps } from './EmojiButton';

export default {
  component: EmojiButton,
} as ComponentMeta<typeof EmojiButton>;

const Template: ComponentStory<typeof EmojiButton> = (args: EmojiButtonProps) => (
  <EmojiButton {...args} onClick={action('click')} />
);

export const Default = Template.bind({});
Default.storyName = 'EmojiButton';
Default.args = {
  emoji: '✅',
  disabled: false,
};
