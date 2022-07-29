import { Button } from 'components';
import { ChapterHeader } from 'components';
import { ColoredBlock } from 'components';
import { Toolbar } from 'components';
import { useRerender } from 'hooks/useRerender';
import { ChangeEventHandler, CSSProperties, MouseEventHandler } from 'react';
import { logTagged } from 'utils/logTagged';

const STYLE: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const BUTTON_TAG = 'Button';
const INPUT_TAG = 'Input';

export function EventHandlers(): JSX.Element {
  const rerender = useRerender();

  const inputFocusHandler = () => {
    logTagged(INPUT_TAG, 'onFocus');
  };

  const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    logTagged(INPUT_TAG, event.target.value);
  };

  const inputBlurHandler = () => {
    logTagged(INPUT_TAG, 'onBlur');
  };

  const mouseEventHandler: MouseEventHandler<HTMLDivElement> = () => {
    rerender();
  };

  return (
    <>
      <ChapterHeader title="Introduction to JSX" subtitle="Adding event handlers" />

      <Toolbar>
        <Button text="Click me!" onClick={() => logTagged(BUTTON_TAG, 'You clicked me!')} />
      </Toolbar>

      <Toolbar>
        <input
          defaultValue="Default value"
          onChange={inputChangeHandler}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
        />
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
