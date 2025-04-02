import { useInterval } from 'hooks/useInterval';
import { CSSProperties, useEffect, useState } from 'react';
import { Position } from 'utils/geometry';
import classes from './Butterfly.module.css';
import { Creature } from './Creature';
import { generateRandomPosition } from './generateRandomPosition';

type Props = {
    creature: Creature;
};

export function Butterfly({ creature }: Props) {
    const [position, setPosition] = useState<Position>(creature.position);

    useEffect(() => setPosition(generateRandomPosition()), []);

    useInterval(() => setPosition(generateRandomPosition()), 5000);

    const style: CSSProperties = {
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        cursor: 'default',
        transition: 'transform 0.1s ease-in-out, left 5s linear, top 5s linear',
    };

    return (
        <div className={classes.wingFlutter} style={style}>
            🦋
        </div>
    );
}
