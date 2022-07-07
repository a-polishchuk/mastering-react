import { ReactLogo } from 'components/ReactLogo';
import { CSSProperties, memo, useRef } from 'react';
import { getRandomColor } from 'utils/getRandomColor';
import { getRandomNumber } from 'utils/getRandomNumber';

function generateLogoColor(): string {
  const opacity = getRandomNumber(1, 4) * 10;
  return getRandomColor() + opacity.toFixed(0);
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

  return <ReactLogo size={getRandomNumber(100, 360)} color={generateLogoColor()} style={style} />;
});
