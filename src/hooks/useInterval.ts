import { useEffect, useRef } from 'react';

export type IntervalCallback = (...args: any[]) => void;

export function useInterval(callback: IntervalCallback, delay: number | null) {
  const callbackRef = useRef<IntervalCallback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const interval = setInterval(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);
}
