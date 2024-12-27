import { useEffect, useRef } from 'react';

export type Listener<T extends Event> = (event: T) => void;
export type EventType = keyof WindowEventMap;

export function useWindowEvent<T extends Event>(type: EventType, listener: Listener<T>) {
    const listenerRef = useRef<Listener<T> | null>(null);

    useEffect(() => {
        listenerRef.current = listener;
    }, [listener]);

    useEffect(() => {
        const eventListener: EventListener = (event) => {
            listenerRef.current?.(event as T);
        };

        window.addEventListener<EventType>(type, eventListener);

        return () => {
            window.removeEventListener<EventType>(type, eventListener);
        };
    }, [type]);
}
