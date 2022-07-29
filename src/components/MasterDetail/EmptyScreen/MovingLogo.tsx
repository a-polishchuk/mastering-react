import { ReactLogo } from 'components';
import { CSSProperties, memo, useRef } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import { generateRandomNumber } from 'utils/generateRandomNumber';

function generateLogoColor(): string {
  const opacity = generateRandomNumber(1, 4) * 10;
  return generateRandomColor() + opacity.toFixed(0);
}

interface Props {
  left: string | number;
  top: string | number;
  duration: number;
}

export const MovingLogo = memo(({ left, top, duration }: Props): JSX.Element => {
  const rotationRef = useRef<number>(0);

  const style: CSSProperties = {
    position: 'absolute',
    transition: `all ${duration}s linear`,
    transform: `translate(-50%, -50%) rotate(${rotationRef.current}deg)`,
    left,
    top,
  };

  rotationRef.current = rotationRef.current === 0 ? 360 : 0;

  return (
    <ReactLogo size={generateRandomNumber(100, 360)} color={generateLogoColor()} style={style} />
  );
});
