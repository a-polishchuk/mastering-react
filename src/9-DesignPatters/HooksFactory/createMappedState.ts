import { useCallback, useState } from 'react';

export type Mapper = (value: string) => string;
export type MappedState = [string, (newValue: string) => void];
export type UseMappedState = (initialValue: string) => MappedState;

export function createMappedState(mapper: Mapper): UseMappedState {
    return function (initialValue: string): MappedState {
        const [value, setValue] = useState<string>(mapper(initialValue));

        const setMappedValue = useCallback((newValue: string) => {
            setValue(mapper(newValue));
        }, []);

        return [value, setMappedValue];
    };
}
