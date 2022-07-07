import { ColoredBlock } from 'components/ColoredBlock';
import { useRerender } from 'hooks/useRerender';
import { CSSProperties, MouseEventHandler } from 'react';

const STYLE: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function EventHandlers(): JSX.Element {
  const rerender = useRerender();

  const eventHandler: MouseEventHandler<HTMLDivElement> = () => {
    rerender();
  };

  return (
    <>
      <h2>Introduction to JSX</h2>
      <h3>Adding event handlers</h3>
      <div onClick={eventHandler} onMouseEnter={eventHandler} onMouseLeave={eventHandler}>
        <ColoredBlock style={STYLE}>Click me! (Hover will do the trick too)</ColoredBlock>
      </div>
    </>
  );
}
