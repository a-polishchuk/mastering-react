import { useEffect, useRef } from 'react';

/**
 * This is not a real hook, just a blueprint.
 */
export function useCustomHookRecipe(callback: () => void) {
    const callbackRef = useRef<() => void>(callback);
    // useRef is cool

    useEffect(() => {
        // updating the latest callback value
        // no need to bother about callback stable ref
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        function handleEvent() {
            // do not call the callback directly!
            // use callbackRef wrapper
            callbackRef.current?.();
        }

        window.addEventListener('someEvent', handleEvent);

        // TODO: don't forget to unsubscribe in cleanup function
        return () => {
            window.removeEventListener('someEvent', handleEvent);
        };
    }, []);

    // TODO: don't forget about const assertion for tuples
    // return [value, setValue] as const;

    // TODO:
    // return {
    //     value,
    //     setValue,
    //     reset,
    // }
}
