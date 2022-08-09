import { ColoredBlock } from 'components';
import { ReactNode } from 'react';

import { Avatar } from './Avatar';
import classes from './FamilyMember.module.css';

interface Props {
  name: string;
  children?: ReactNode;
}

export function FamilyMember({ name, children }: Props): JSX.Element {
  return (
    <ColoredBlock style={{ flex: 1 }}>
      <Avatar name={name} />
      {children ? <div className={classes.children}>{children}</div> : null}
    </ColoredBlock>
  );
}
