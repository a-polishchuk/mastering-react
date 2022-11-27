import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import { useRerender } from '../../hooks/useRerender';
import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';
import { RendersCounter } from './RendersCounter';

export default {
  component: RendersCounter,
} as ComponentMeta<typeof RendersCounter>;

export const WithButton: ComponentStory<typeof RendersCounter> = () => {
  const rerender = useRerender();
  return (
    <RendersCounter>
      <Button text="Rerender" onClick={rerender} />
    </RendersCounter>
  );
};

export const WithToolbar: ComponentStory<typeof RendersCounter> = () => {
  const [text, setText] = useState<string>('');
  return (
    <RendersCounter>
      <Toolbar>
        <input value={text} onChange={(event) => setText(event.target.value)} />
      </Toolbar>
    </RendersCounter>
  );
};
