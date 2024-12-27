import { throttle } from 'lodash';
import { useCallback, useState } from 'react';

export type UseThrottledState<T> = [T, (newValue: T) => void];

export function useThrottledState<T>(initialValue: T, delay: number): UseThrottledState<T> {
    const [throttledValue, setThrottledValue] = useState<T>(initialValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setter = useCallback(
        throttle((newValue: T) => setThrottledValue(newValue), delay),
        [delay],
    );

    return [throttledValue, setter];
}
