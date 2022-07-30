import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PropsTable, PropsTableProps } from './PropsTable';

export default {
  component: PropsTable,
} as ComponentMeta<typeof PropsTable>;

const Template: ComponentStory<typeof PropsTable> = (args: PropsTableProps) => (
  <PropsTable {...args} />
);

export const Default = Template.bind({});
Default.storyName = 'PropsTable';
Default.args = {
  title: 'Title',
  data: {
    firstName: 'John',
    lastName: 'Wick',
    age: '45',
    job: {
      title: 'killer',
      status: 'freelancer',
    },
  },
};
