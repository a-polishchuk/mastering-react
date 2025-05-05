import { ChapterWrapper, RelatedDocs } from 'components';
import { MouseEventHandler, useOptimistic, useState, useTransition } from 'react';
import { cn } from 'utils/cn';
import { Position } from 'utils/geometry';
import classes from './UseOptimisticExample.module.css';

const DEFAULT_POSITION: Position = { x: 0, y: 0 };

export function UseOptimisticExample() {
    const [isPending, startTransition] = useTransition();
    const [serverPosition, setServerPosition] = useState<Position>(DEFAULT_POSITION);
    const [optimisticPosition, setOptimisticPosition] = useOptimistic(
        serverPosition,
        (_currentValue, optimisticValue: Position) => optimisticValue,
    );

    const handleClick: MouseEventHandler<HTMLElement> = (event) => {
        const { clientX, clientY } = event;
        const target = event.target as HTMLElement;
        const { x, y } = target.getBoundingClientRect();
        const newPosition: Position = {
            x: clientX - x,
            y: clientY - y,
        };

        startTransition(async () => {
            // here we "optimistically" updating local state
            // BEFORE the API call is made
            setOptimisticPosition(newPosition);
            try {
                const newServerPosition = await simulateAPICall(newPosition);
                // server returned synchronized position, let's update the state
                setServerPosition(newServerPosition);
            } catch (error) {
                // on error, React automatically reverts optimistic
                // position to the previous value!
                console.log('API call returned an error', error);
            }
        });
    };

    return (
        <ChapterWrapper title="useOptimistic" subtitle="New hooks in React 19">
            <div className={classes.root} onClick={handleClick}>
                <div
                    className={cn(classes.circle, isPending && classes.pending)}
                    style={{ left: optimisticPosition?.x, top: optimisticPosition?.y }}
                />
                <div className={classes.relatedDocs}>
                    <RelatedDocs
                        docs={[
                            {
                                label: 'useOptimistic',
                                href: 'https://react.dev/reference/react/useOptimistic',
                            },
                            {
                                label: 'useTransition',
                                href: 'https://react.dev/reference/react/useTransition',
                            },
                        ]}
                    />
                </div>
            </div>
        </ChapterWrapper>
    );
}

function simulateAPICall(newPosition: Position) {
    return new Promise<Position>((resolve, reject) => {
        setTimeout(() => {
            // 7 out of 10 times, the API call will succeed
            Math.random() < 0.7 ? resolve(newPosition) : reject(new Error('API call failed'));
        }, 1000);
    });
}
