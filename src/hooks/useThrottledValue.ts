import { useEffect, useState, useRef } from 'react';

export function useThrottledValue<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const valueRef = useRef(value);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    valueRef.current = value;
    if (!timeoutRef.current) {
      setThrottledValue(value);
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        setThrottledValue(valueRef.current);
      }, delay);
    }
  }, [value, delay]);

  useEffect(() => {
    const cleanup = () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
    return cleanup;
  }, []);

  return throttledValue;
}
