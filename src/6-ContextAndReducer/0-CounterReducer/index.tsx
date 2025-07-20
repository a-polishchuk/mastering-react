import { Button, ChapterWrapper, Toolbar, ValueLabel, RelatedDocs } from 'components';
import { useReducer } from 'react';
import { Action } from './Action';
import { counterReducer, INITIAL_COUNT } from './counterReducer';

export function CounterReducerChapter() {
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

            <RelatedDocs
                docs={[
                    {
                        label: 'useReducer Hook Reference',
                        href: 'https://react.dev/reference/react/useReducer',
                    },
                    {
                        label: 'Extracting State Logic into a Reducer',
                        href: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
                    },
                    {
                        label: 'Choosing the State Structure',
                        href: 'https://react.dev/learn/choosing-the-state-structure',
                    },
                ]}
            />
        </ChapterWrapper>
    );
}
