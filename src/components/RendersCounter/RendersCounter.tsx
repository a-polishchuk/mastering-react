import classes from './RendersCounter.module.css';
import { ReactNode, useEffect, useRef } from 'react';

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
      <div key={generateNewKey()} className={classes.rendersCounter}>
        R: {rendersCountRef.current}
      </div>
    </div>
  );
}

function generateNewKey(): number {
  return new Date().getTime();
}
