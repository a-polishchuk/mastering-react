import { Button, ChapterWrapper, Toolbar, ValueLabel } from 'components';
import { useReducer } from 'react';
import { Action } from './Action';
import { counterReducer, INITIAL_COUNT } from './counterReducer';

export function UseCounterReducer() {
    const [count, dispatch] = useReducer(counterReducer, INITIAL_COUNT);

    return (
        <ChapterWrapper title="useReducer" subtitle="Simple counter example">
            <Toolbar>
                <ValueLabel value={count} />
            </Toolbar>

            <Toolbar>
                <Button text="+ 1" onClick={() => dispatch(Action.INCREMENT)} />
                <Button text="* 2" onClick={() => dispatch(Action.DOUBLE)} />
                <Button text="^ 2" onClick={() => dispatch(Action.POWER_2)} />
                <Button text="Reset" onClick={() => dispatch(Action.RESET)} />
            </Toolbar>
        </ChapterWrapper>
    );
}
