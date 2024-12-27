import { Toolbar } from 'components';
import classes from './EmojisBar.module.css';

type Props = {
    emojis: string[];
    onClick: (emoji: string) => void;
};

export function EmojisBar({ emojis, onClick }: Props) {
    return (
        <Toolbar>
            {emojis.map((emoji) => (
                <div key={emoji} className={classes.animalEmoji} onClick={() => onClick(emoji)}>
                    {emoji}
                </div>
            ))}
        </Toolbar>
    );
}
