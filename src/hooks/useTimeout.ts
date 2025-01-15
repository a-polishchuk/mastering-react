import { useEffect, useRef, useState } from 'react';

export function useTimeout(callback: () => void, timeout: number | null) {
    const callbackRef = useRef(callback);
    const [dummyState, setDummyState] = useState<any>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!timeout) {
            return;
        }

        const timeoutId = setTimeout(() => callbackRef.current(), timeout);

        return () => clearTimeout(timeoutId);
    }, [timeout, dummyState]);

    return {
        reschedule: () => setDummyState({}),
    };
}
