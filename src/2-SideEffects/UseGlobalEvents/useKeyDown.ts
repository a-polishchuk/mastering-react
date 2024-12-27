import { useEffect, useRef } from 'react';

type KeyDownCallback = (buttonKey: string) => void;

export function useKeyDown(callback: KeyDownCallback) {
    const callbackRef = useRef<KeyDownCallback>(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            callbackRef.current(event.key);
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);
}
