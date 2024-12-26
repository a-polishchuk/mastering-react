import { CSSProperties } from 'react';

import { HandShape } from './HandShape';
import { HandShapeEmoji } from './HandShapeEmoji';

interface Props {
  value: HandShape;
  isSelected: boolean;
  onClick: (value: HandShape) => void;
}

export function HandShapeSelectable({ value, isSelected, onClick }: Props) {
  const style: CSSProperties = {
    opacity: isSelected ? 1 : 0.5,
    textShadow: isSelected ? '2px 2px #e1ccff' : '',
    cursor: 'default',
  };

  return (
    <span style={style} onClick={() => onClick(value)}>
      <HandShapeEmoji value={value} />
    </span>
  );
}
