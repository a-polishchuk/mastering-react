import { MutableRefObject, useEffect, useRef } from 'react';

export function useRefWrapper<T>(value: T): MutableRefObject<T> {
  const refWrapper = useRef<T>(value);

  useEffect(() => {
    refWrapper.current = value;
  }, [value]);

  return refWrapper;
}
