import { useState } from 'react';

export interface UseCounter {
    value: number;
    increase: () => void;
    decrease: () => void;
}

export function useCounter(initialValue = 0, delta = 1): UseCounter {
    const [value, setValue] = useState<number>(initialValue);

    const increase = () => setValue((prevValue) => prevValue + delta);
    const decrease = () => setValue((prevValue) => prevValue - delta);

    return {
        value,
        increase,
        decrease,
    };
}
