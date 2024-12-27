import { useEffect, useRef } from 'react';

export function useUpdateEffect(callback: () => void) {
    const firstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
        } else {
            callback();
        }
    }, [callback]);
}
