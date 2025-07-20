import { useEffect, useRef } from 'react';

type Callback = () => void;

/**
 * @param deps - передавати список залежностей ось таким чином, імітуючи стандартний useEffect -
 * не добре, тому що ви позбавляєте себе автоматичних перевірок від ESLint
 */
export function useUpdateEffect(callback: Callback, deps: unknown[]) {
    const firstRenderRef = useRef<boolean>(true);
    const callbackRef = useRef<Callback>(callback);

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
