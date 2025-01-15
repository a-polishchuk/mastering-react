import { useCallback, useState, useRef, useEffect } from 'react';

export type Size = [number, number];

const INITIAL_SIZE: Size = [0, 0];

export function useElementSize() {
    const [size, setSize] = useState<Size>(INITIAL_SIZE);
    const observerRef = useRef<ResizeObserver | null>(null);

    const refCallback = useCallback((element: HTMLElement | null) => {
        observerRef.current?.disconnect();
        if (element) {
            const observer = new ResizeObserver((entries) => {
                const { inlineSize, blockSize } = entries[0].borderBoxSize[0];
                setSize([inlineSize, blockSize]);
            });
            observer.observe(element);
            observerRef.current = observer;
        }
    }, []);

    useEffect(() => {
        return () => observerRef.current?.disconnect();
    }, []);

    return [size, refCallback] as const;
}
