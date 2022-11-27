import { useEffect, useRef } from 'react';
import classes from './RendersCounter.module.css';

export interface RendersCounterProps {
  children: JSX.Element;
}

export function RendersCounter({ children }: RendersCounterProps): JSX.Element {
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
