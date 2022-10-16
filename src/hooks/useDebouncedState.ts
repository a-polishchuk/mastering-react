import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

export type UseDebouncedState<T> = [T, (newValue: T) => void];

export function useDebouncedState<T>(initialValue: T, delay: number): UseDebouncedState<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setter = useCallback(
    debounce((newValue: T) => setDebouncedValue(newValue), delay),
    [delay]
  );

  return [debouncedValue, setter];
}
