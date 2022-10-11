import { RefObject, useCallback, useEffect, useState } from 'react';

import { useEventListener } from './useEventListener';

type Size = [number, number];
const INITIAL_SIZE: Size = [0, 0];

// TODO: rework this to use memoized ref callback
// TODO: try to use ResizeObserver instead of global 'resize' event
export function useElementSize(elementRef: RefObject<HTMLElement>): Size {
  const [size, setSize] = useState<Size>(INITIAL_SIZE);

  const updateElementSize = useCallback(() => {
    const node = elementRef.current;
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      setSize([width, height]);
    }
  }, [elementRef]);

  useEffect(() => {
    updateElementSize();
  }, [updateElementSize]);

  useEventListener('resize', updateElementSize);

  return size;
}
