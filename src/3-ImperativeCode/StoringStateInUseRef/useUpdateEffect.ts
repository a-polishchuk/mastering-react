import { useEffect, useRef } from 'react';

type Callback = () => void;

export function useUpdateEffect(callback: Callback, deps: any[]) {
  const firstRenderRef = useRef<boolean>(true);
  const callbackRef = useRef<Callback>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else {
      callbackRef.current?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
