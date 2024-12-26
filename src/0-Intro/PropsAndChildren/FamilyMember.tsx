import { ColoredBlock } from 'components';
import { ReactNode } from 'react';
import { Avatar } from './Avatar';
import classes from './FamilyMember.module.css';

type Props = {
  name: string;
  children?: ReactNode;
};

export function FamilyMember({ name, children }: Props) {
  return (
    <ColoredBlock style={{ flex: 1 }}>
      <Avatar name={name} />
      {children ? <div className={classes.children}>{children}</div> : null}
    </ColoredBlock>
  );
}
