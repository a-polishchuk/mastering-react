import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = useCallback(
        (newValue: T) => {
            try {
                window.localStorage.setItem(key, JSON.stringify(newValue));
                setStoredValue(newValue);
            } catch (error) {
                console.error(error);
            }
        },
        [key],
    );

    return [storedValue, setValue] as const;
}
