import { useEffect, useRef } from 'react';

export function useEventListener(eventName: string, listener: EventListener, element = window) {
  const listenerRef = useRef<EventListener | null>(null);

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    const eventListener: EventListener = (event) => {
      listenerRef.current?.(event);
    };
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
