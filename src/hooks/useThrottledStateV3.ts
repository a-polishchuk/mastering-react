import { useCallback, useEffect, useRef, useState } from 'react';

export function useThrottledStateV3<T>(initialValue: T, delay: number) {
    const [throttledValue, setValue] = useState<T>(initialValue);
    const lastValueRef = useRef<T>(initialValue);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastUpdateRef = useRef<number>(0);

    const throttledSetter = useCallback(
        (newValue: T) => {
            const now = Date.now();
            const timeSinceLastUpdate = now - lastUpdateRef.current;
            lastValueRef.current = newValue;

            if (timeSinceLastUpdate >= delay) {
                setValue(lastValueRef.current);
                lastUpdateRef.current = now;
            } else if (!timeoutRef.current) {
                const remainingTime = delay - timeSinceLastUpdate;
                timeoutRef.current = setTimeout(() => {
                    setValue(lastValueRef.current);
                    lastUpdateRef.current = Date.now();
                    timeoutRef.current = null;
                }, remainingTime);
            }
        },
        [delay],
    );

    useEffect(() => {
        // Cleanup timeout on unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return [throttledValue, throttledSetter] as const;
}
