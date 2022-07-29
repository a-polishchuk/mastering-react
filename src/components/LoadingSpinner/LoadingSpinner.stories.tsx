import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoadingSpinner } from './LoadingSpinner';

export default {
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

export const Default: ComponentStory<typeof LoadingSpinner> = () => <LoadingSpinner />;
Default.storyName = 'LoadingSpinner';
