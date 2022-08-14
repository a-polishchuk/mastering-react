import { useCallback, useEffect, useState, useRef } from 'react';

export type IntervalCallback = (...args: any[]) => void;

export function useInterval(callback: IntervalCallback, delay: number | null) {
  const callbackRef = useRef(callback);
  const [intervalHandle, setIntervalHandle] = useState<any>(null);
  const [trigger, setTrigger] = useState<{} | null>(null);

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

    setIntervalHandle(interval);

    return () => {
      clearInterval(interval);
    };
  }, [delay, trigger]);

  const isRunning = !!intervalHandle;

  const stop = useCallback(() => {
    if (intervalHandle) {
      clearInterval(intervalHandle);
      setIntervalHandle(null);
    }
  }, [intervalHandle]);

  const restart = useCallback(() => {
    setTrigger({});
  }, []);

  return { isRunning, stop, restart };
}
