import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export function useDebouncedState<T>(initialValue: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setter = useCallback(
        debounce((newValue: T) => setDebouncedValue(newValue), delay),
        [delay],
    );

    return [debouncedValue, setter] as const;
}
