import { MouseEventHandler } from 'react';
import classes from './EmojiButton.module.css';

export type EmojiButtonProps = {
    emoji: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    tooltip?: string;
    disabled?: boolean;
};

export function EmojiButton({ emoji, onClick, disabled, tooltip }: EmojiButtonProps) {
    return (
        <button className={classes.button} onClick={onClick} disabled={disabled} title={tooltip}>
            {emoji}
        </button>
    );
}
