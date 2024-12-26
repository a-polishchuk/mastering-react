import { RefObject, useEffect, useRef } from 'react';

export function useRefWrapper<T>(value: T): RefObject<T> {
  const refWrapper = useRef<T>(value);

  useEffect(() => {
    refWrapper.current = value;
  }, [value]);

  return refWrapper;
}
