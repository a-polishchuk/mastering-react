import { useInterval } from 'hooks/useInterval';
import { useEffect, useState } from 'react';
import { generateRandomNumber } from 'utils/generateRandomNumber';

import { MovingLogo } from './MovingLogo';

const CYCLE_DURATION = 20;

interface Position {
  left: string | number;
  top: string | number;
}

function generateInitialPositions(positionsNumber: number): Position[] {
  return new Array(positionsNumber).fill({
    left: '50%',
    top: '50%',
  });
}

function generateRandomPositions(positionsNumber: number): Position[] {
  const array = [];
  for (let i = 0; i < positionsNumber; i++) {
    array.push({
      left: `${generateRandomNumber(0, 100)}%`,
      top: `${generateRandomNumber(0, 100)}%`,
    });
  }
  return array;
}

export function Background({ logosNumber }: { logosNumber: number }): JSX.Element {
  const [positions, setPositions] = useState<Position[]>(() =>
    generateInitialPositions(logosNumber)
  );

  useEffect(() => {
    setPositions(generateRandomPositions(logosNumber));
  }, [logosNumber]);

  useInterval(() => {
    setPositions(generateRandomPositions(logosNumber));
  }, CYCLE_DURATION * 1000);

  return (
    <>
      {positions.map(({ left, top }, index) => (
        <MovingLogo key={index} duration={CYCLE_DURATION} left={left} top={top} />
      ))}
    </>
  );
}
