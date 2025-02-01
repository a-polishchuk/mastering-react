import { useEffect, useRef } from 'react';

export function usePreviousRenderValue<T>(value: T) {
    const refContainer = useRef<T | undefined>(undefined);

    useEffect(() => {
        refContainer.current = value;
    }, [value]);

    return refContainer.current;
}
