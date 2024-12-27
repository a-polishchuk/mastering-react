import { MouseEventHandler } from 'react';
import ReactTooltip from 'react-tooltip';
import classes from './EmojiButton.module.css';

export type EmojiButtonProps = {
    emoji: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    tooltip?: string;
    disabled?: boolean;
};

export function EmojiButton({ emoji, onClick, disabled, tooltip }: EmojiButtonProps) {
    return (
        <>
            <div data-tip={tooltip}>
                <button className={classes.button} onClick={onClick} disabled={disabled}>
                    {emoji}
                </button>
            </div>
            <ReactTooltip
                effect="float"
                type="dark"
                place="bottom"
                wrapper="span"
                delayShow={500}
            />
        </>
    );
}
