import { useCallback, useRef } from 'react';
import { useEventListener } from './useEventListener';

type RefCallback = (element: HTMLElement | null) => void;

export function useClickOutside(callback: () => void): RefCallback {
  const elementRef = useRef<HTMLElement | null>(null);

  // TODO: make useEventListener a generic hook, event type param
  useEventListener('click', (event) => {
    const path = (event as any).composedPath();
    if (!path.includes(elementRef.current)) {
      callback();
    }
  });

  return useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);
}
