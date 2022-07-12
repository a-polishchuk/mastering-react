import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { useReducer } from 'react';

import { Action } from './Action';
import { CounterReducer, counterReducer, INITIAL_COUNT } from './counterReducer';

export function UseCounterReducer(): JSX.Element {
  const [count, dispatch] = useReducer<CounterReducer>(counterReducer, INITIAL_COUNT);

  return (
    <>
      <ChapterHeader title="useReducer" subtitle="Simple counter example" />

      <Toolbar>
        <ValueLabel value={count} />
      </Toolbar>

      <Toolbar>
        <Button text="+ 1" onClick={() => dispatch(Action.INCREMENT)} />
        <Button text="* 2" onClick={() => dispatch(Action.DOUBLE)} />
        <Button text="^ 2" onClick={() => dispatch(Action.POWER_2)} />
        <Button text="Reset" onClick={() => dispatch(Action.RESET)} />
      </Toolbar>
    </>
  );
}
