import { throttle } from 'lodash';
import { useState, useMemo } from 'react';

export type UseThrottledState<T> = [T, (newValue: T) => void];

export function useThrottledState<T>(initialValue: T, delay: number): UseThrottledState<T> {
    const [throttledValue, setValue] = useState<T>(initialValue);

    const throttledSetter = useMemo(() => {
        return throttle((newValue: T) => setValue(newValue), delay);
    }, [delay]);

    return [throttledValue, throttledSetter];
}
