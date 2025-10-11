import { useCallback, useEffect, useRef } from 'react';

export function useCustomEffectEvent<T extends unknown[]>(callback: (...args: T) => void) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    return useCallback((...args: T) => {
        callbackRef.current(...args);
    }, []);
}
