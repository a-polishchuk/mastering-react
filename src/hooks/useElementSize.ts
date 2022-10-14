import { useCallback, useState } from 'react';
import { RefCallback } from 'types/RefCallback';

export type Size = [number, number];
const INITIAL_SIZE: Size = [0, 0];

export function useElementSize(): [Size, RefCallback] {
  const [size, setSize] = useState<Size>(INITIAL_SIZE);

  const refCallback = useCallback((element: HTMLElement | null) => {
    if (element) {
      const { width, height } = element.getBoundingClientRect();
      setSize([width, height]);
    }
  }, []);

  return [size, refCallback];
}
