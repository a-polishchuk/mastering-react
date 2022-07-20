import { Button } from 'components/Button';
import { ReactNode } from 'react';

import classes from './Modal.module.css';

interface Props {
  title: string;
  message: ReactNode;
  buttons: Record<string, () => void>;
}

export function Modal({ title, message, buttons }: Props): JSX.Element {
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <div className={classes.title}>{title}</div>
        <div className={classes.message}>{message}</div>
        <div className={classes.buttons}>
          {Object.entries(buttons).map(([key, value]) => (
            <Button key={key} text={key} onClick={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
