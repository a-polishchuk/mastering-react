import { MouseEventHandler } from 'react';

import classes from './Button.module.css';

export interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
  const { text, onClick, disabled = false } = props;

  return (
    <button className={classes.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
