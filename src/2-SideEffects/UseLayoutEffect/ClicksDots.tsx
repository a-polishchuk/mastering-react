import { CSSProperties, MouseEventHandler } from 'react';
import { buildDotStyle } from './buildDotStyle';
import { Dot } from './Dot';
import { generateDummies } from './generateDummies';

export const CONTAINER_ID = 'container-div';

const DUMMIES_COUNT = 5000;
const DUMMY_SIZE = 10;
const BLUE_SIZE = 10;
const PINK_SIZE = 20;

const STYLE: CSSProperties = {
  position: 'relative',
  height: '100%',
  width: '100%',
};

type Props = {
  blueDot: Dot;
  pinkDot: Dot;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export function ClickDots({ blueDot, pinkDot, onClick }: Props) {
  return (
    <div id={CONTAINER_ID} style={STYLE} onClick={onClick}>
      {generateDummies(DUMMIES_COUNT, DUMMY_SIZE)}
      <div style={buildDotStyle(blueDot, '#5599ff88', BLUE_SIZE)} />
      <div style={buildDotStyle(pinkDot, '#ff559988', PINK_SIZE)} />
    </div>
  );
}
