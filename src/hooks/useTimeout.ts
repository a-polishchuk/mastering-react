import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, timeout: number | null) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!timeout) {
      return;
    }

    const timeoutId = setTimeout(callbackRef.current, timeout);

    return () => clearTimeout(timeoutId);
  }, [timeout]);
}
