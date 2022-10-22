import { useEffect, useRef } from 'react';

// TODO: it's actually usePrevRenderValue()
export function usePrevious<T>(value: T): T | undefined {
  const refContainer = useRef<T | undefined>(undefined);

  useEffect(() => {
    refContainer.current = value;
  }, [value]);

  return refContainer.current;
}
