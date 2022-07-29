import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextBlock, TextBlockProps } from './TextBlock';

export default {
  component: TextBlock,
} as ComponentMeta<typeof TextBlock>;

const Template: ComponentStory<typeof TextBlock> = (args: TextBlockProps) => (
  <TextBlock {...args} />
);

export const WithText = Template.bind({});
WithText.args = {
  children: 'Text block with a simple text.',
};

export const WithList = Template.bind({});
WithList.args = {
  children: (
    <>
      Fruits list:
      <ol>
        <li>🍎 - apple</li>
        <li>🍐 - pear</li>
        <li>🍊 - orange</li>
        <li>🍋 - lemon</li>
        <li>🍌 - banana</li>
        <li>🍉 - watermelon</li>
        <li>🍇 - grapes</li>
        <li>🍓 - strawberry</li>
        <li>🫐 - blueberry</li>
        <li>🍒 - cherry</li>
        <li>🍍 - pineapple</li>
        <li>🥝 - kiwi</li>
      </ol>
    </>
  ),
};
