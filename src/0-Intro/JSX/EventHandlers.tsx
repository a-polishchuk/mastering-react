import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { ColoredBlock } from 'components/ColoredBlock';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';
import { ChangeEventHandler, CSSProperties, MouseEventHandler } from 'react';
import { logTagged } from 'utils/logTagged';

const STYLE: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function EventHandlers(): JSX.Element {
  const rerender = useRerender();

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    logTagged('Input', event.target.value);
  };

  const mouseEventHandler: MouseEventHandler<HTMLDivElement> = () => {
    rerender();
  };

  return (
    <>
      <ChapterHeader title="Introduction to JSX" subtitle="Adding event handlers" />

      <Toolbar>
        <Button text="Click me!" onClick={() => logTagged('Button', 'You clicked me!')} />
      </Toolbar>

      <Toolbar>
        <input defaultValue="Default value" onChange={inputChangeHandler} />
      </Toolbar>

      <div
        onClick={mouseEventHandler}
        onMouseEnter={mouseEventHandler}
        onMouseLeave={mouseEventHandler}
      >
        <ColoredBlock style={STYLE}>Click me! (Hover will do the trick too)</ColoredBlock>
      </div>
    </>
  );
}
