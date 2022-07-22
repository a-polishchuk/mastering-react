import { useRef } from 'react';

export type UpdateFunc<T> = (value: T) => T;
export type UseRefState<T> = [T, (updateFunc: UpdateFunc<T>) => void];

export function useRefState<T>(initialValue: T): UseRefState<T> {
  const refContainer = useRef<T>(initialValue);

  const setter = (updateFunc: UpdateFunc<T>) => {
    refContainer.current = updateFunc(refContainer.current);
  };

  return [refContainer.current, setter];
}
