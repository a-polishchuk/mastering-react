import { useState, useCallback, useRef, useEffect } from 'react';

type EventCallback = () => void;

export function useHovered() {
    const [hovered, setHovered] = useState(false);

    const elementRef = useRef<HTMLElement | null>(null);
    const mouseOverRef = useRef<EventCallback | null>(null);
    const mouseOutRef = useRef<EventCallback | null>(null);

    const refCallback = useCallback((element: HTMLElement | null) => {
        if (!element) {
            return;
        }

        if (mouseOverRef.current) {
            elementRef.current?.removeEventListener('mouseover', mouseOverRef.current);
        }
        if (mouseOutRef.current) {
            elementRef.current?.removeEventListener('mouseout', mouseOutRef.current);
        }

        elementRef.current = element;
        mouseOverRef.current = () => setHovered(true);
        mouseOutRef.current = () => setHovered(false);
        element.addEventListener('mouseover', mouseOverRef.current);
        element.addEventListener('mouseout', mouseOutRef.current);
    }, []);

    useEffect(() => {
        return () => {
            if (mouseOverRef.current) {
                elementRef.current?.removeEventListener('mouseover', mouseOverRef.current);
            }
            if (mouseOutRef.current) {
                elementRef.current?.removeEventListener('mouseout', mouseOutRef.current);
            }
        };
    }, []);

    return [hovered, refCallback] as const;
}
