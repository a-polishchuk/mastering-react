import { useInterval } from 'hooks/useInterval';
import { useCallback, useState } from 'react';

interface Props {
  value: number;
  delay: number;
  step: number;
}

export function Score(props: Props): JSX.Element {
  const animatedValue = useAnimatedValue(props);

  return <span>{animatedValue} pts</span>;
}

function useAnimatedValue({ value, delay, step }: Props): number {
  const [animatedValue, setAnimatedValue] = useState(value);

  const callback = useCallback(() => {
    setAnimatedValue((current) => Math.min(current + step, value));
  }, [step, value]);

  useInterval(callback, delay);

  return animatedValue;
}
