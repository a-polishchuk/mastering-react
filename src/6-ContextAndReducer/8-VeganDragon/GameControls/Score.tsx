import { useInterval } from 'hooks/useInterval';
import { useState } from 'react';

type Props = {
    value: number;
    delay: number;
    step: number;
};

export function Score(props: Props) {
    const animatedValue = useAnimatedValue(props);

    return <span>{animatedValue} pts</span>;
}

function useAnimatedValue({ value, delay, step }: Props): number {
    const [animatedValue, setAnimatedValue] = useState(value);
    const delayOrNull = animatedValue !== value ? delay : null;

    useInterval(() => {
        setAnimatedValue((current) => Math.min(current + step, value));
    }, delayOrNull);

    return animatedValue;
}
