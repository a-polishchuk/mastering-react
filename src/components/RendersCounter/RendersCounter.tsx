import { ReactNode, useEffect, useRef } from 'react';
import classes from './RendersCounter.module.css';

export type RendersCounterProps = {
    children: ReactNode;
};

export function RendersCounter({ children }: RendersCounterProps) {
    const rendersCountRef = useRef<number>(1);

    useEffect(() => {
        rendersCountRef.current++;
    });

    return (
        <div className={classes.container}>
            {children}
            <div className={classes.rendersCounter}>R: {rendersCountRef.current}</div>
        </div>
    );
}
