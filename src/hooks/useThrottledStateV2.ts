import { useCallback, useEffect, useRef, useState } from 'react';

export function useThrottledStateV2<T>(initialValue: T, delay: number) {
    const [throttledValue, setValue] = useState<T>(initialValue);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastUpdateRef = useRef<number>(0);

    const throttledSetter = useCallback(
        (newValue: T) => {
            const now = Date.now();
            const timeSinceLastUpdate = now - lastUpdateRef.current;

            if (timeSinceLastUpdate >= delay) {
                setValue(newValue);
                lastUpdateRef.current = now;
            } else {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
                const remainingTime = delay - timeSinceLastUpdate;
                timeoutRef.current = setTimeout(() => {
                    setValue(newValue);
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

    return [throttledValue, throttledSetter];
}
