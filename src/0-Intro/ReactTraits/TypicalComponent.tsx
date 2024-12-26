import { ColoredBlock } from 'components';
import { CSSProperties, ReactNode } from 'react';

import classes from './TypicalComponent.module.css';

interface Props {
  name: string;
  isRoot?: boolean;
  children?: ReactNode;
}

const BLOCK_STYLE: CSSProperties = {
  flex: 1,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function TypicalComponent({ name, isRoot = false, children }: Props) {
  return (
    <ColoredBlock style={BLOCK_STYLE}>
      &lt;{name} /&gt;
      {!isRoot && <div className={classes.arrow}>⇩</div>}
      {children && <div className={classes.children}>{children}</div>}
    </ColoredBlock>
  );
}
