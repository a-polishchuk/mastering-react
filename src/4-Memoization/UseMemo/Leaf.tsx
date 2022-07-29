import { ColoredBlock } from 'components';
import { CSSProperties, MouseEventHandler } from 'react';

import { nodeStyle } from './nodeStyle';

interface Props {
  path: string[];
  onClick: MouseEventHandler<HTMLDivElement>;
}

export function Leaf({ path, onClick }: Props): JSX.Element {
  const leafStyle: CSSProperties = {
    ...nodeStyle,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <ColoredBlock style={leafStyle} onClick={onClick}>
      {path.join(', ')}
    </ColoredBlock>
  );
}
