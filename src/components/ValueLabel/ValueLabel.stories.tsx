import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';
import { ValueLabel, ValueLabelProps } from './ValueLabel';

export default {
  component: ValueLabel,
} as ComponentMeta<typeof ValueLabel>;

export const Default: ComponentStory<typeof ValueLabel> = (args: ValueLabelProps) => (
  <ValueLabel {...args} />
);
Default.args = {
  value: 42,
};

export const InsideToolbar: ComponentStory<typeof ValueLabel> = () => {
  const [value, setValue] = useState<number>(42);
  const increment = () => setValue((val) => val + 1);
  const decrement = () => setValue((val) => val - 1);

  return (
    <Toolbar>
      <ValueLabel value={value} minWidth={150} />
      <Button text="+1" onClick={increment} />
      <Button text="-1" onClick={decrement} />
    </Toolbar>
  );
};
