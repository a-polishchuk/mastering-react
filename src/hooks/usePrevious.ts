import { useEffect, useRef } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const refContainer = useRef<T | undefined>(undefined);

  useEffect(() => {
    refContainer.current = value;
  }, [value]);

  return refContainer.current;
}
