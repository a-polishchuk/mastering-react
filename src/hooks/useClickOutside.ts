import { useCallback, useRef } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useClickOutside(callback: () => void) {
    const elementRef = useRef<HTMLElement | null>(null);

    useWindowEvent('click', (event: PointerEvent) => {
        const path = event.composedPath();
        if (path.every((target) => target !== elementRef.current)) {
            callback();
        }
    });

    return useCallback((element: HTMLElement | null) => {
        elementRef.current = element;
    }, []);
}
