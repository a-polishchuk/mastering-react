import { useState } from 'react';
import { useInterval } from 'hooks/useInterval';

type Props = {
  emojis: string[];
  delay: number;
  fontSize: number;
};

export function AnimatedEmoji({ emojis, delay, fontSize }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useInterval(() => {
    setCurrentIndex((value) => {
      const newValue = value + 1;
      return newValue >= emojis.length ? 0 : newValue;
    });
  }, delay);

  return <div style={{ fontSize }}>{emojis[currentIndex]}</div>;
}
