import throttle from 'lodash/throttle';
import { useState, useMemo } from 'react';

export function useThrottledState<T>(initialValue: T, delay: number) {
    const [throttledValue, setValue] = useState<T>(initialValue);

    const throttledSetter = useMemo(() => {
        return throttle((newValue: T) => setValue(newValue), delay);
    }, [delay]);

    return [throttledValue, throttledSetter] as const;
}
