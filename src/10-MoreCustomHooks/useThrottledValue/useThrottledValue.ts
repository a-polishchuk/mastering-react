import { useEffect, useState, useRef } from 'react';

/**
 * Prevents rapid change of a passed value.
 *
 * @param delay in milliseconds
 * @returns throttled value
 */
export function useThrottledValue<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState(value);
  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setThrottledValue(valueRef.current);
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [delay]);

  return throttledValue;
}
