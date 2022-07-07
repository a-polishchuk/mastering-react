import { CSSProperties, ReactNode } from 'react';
import { getRandomColor } from 'utils/getRandomColor';

import { Avatar } from './Avatar';
import classes from './FamilyMember.module.css';

interface Props {
  name: string;
  children?: ReactNode;
}

export function FamilyMember({ name, children }: Props): JSX.Element {
  const containerStyle: CSSProperties = {
    backgroundColor: getRandomColor() + '11',
  };

  return (
    <div className={classes.container} style={containerStyle}>
      <Avatar name={name} />
      {children ? <div className={classes.children}>{children}</div> : null}
    </div>
  );
}
