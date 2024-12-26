import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useRerender } from '../../hooks/useRerender';
import { Button } from '../Button/Button';
import { Toolbar } from '../Toolbar/Toolbar';
import { RendersCounter } from './RendersCounter';

export default {
  component: RendersCounter,
} as Meta<typeof RendersCounter>;

type Story = StoryObj<typeof RendersCounter>;

export const WithButton: Story = {
  render: () => {
    const rerender = useRerender();
    return (
      <RendersCounter>
        <Button text="Rerender" onClick={rerender} />
      </RendersCounter>
    );
  },
};

export const WithToolbar: Story = {
  render: () => {
    const [text, setText] = useState<string>('');
    return (
      <RendersCounter>
        <Toolbar>
          <input value={text} onChange={(event) => setText(event.target.value)} />
        </Toolbar>
      </RendersCounter>
    );
  },
};
