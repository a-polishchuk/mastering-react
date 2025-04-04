import { CSSProperties, memo } from 'react';
import { getAngle, getDistance, getMiddle, Position } from 'utils/geometry';

type Props = {
    from: Position;
    to: Position;
    color?: string;
};

export const Line = memo(({ from, to, color }: Props) => {
    const { x, y } = getMiddle(from, to);
    const width = getDistance(from, to);
    const angle = getAngle(from, to);

    const style: CSSProperties = {
        pointerEvents: 'none',
        position: 'absolute',
        height: '2px',
        border: `1px dashed ${color || '#0003'}`,
        left: x,
        top: y,
        width,
        transform: `translate(-50%, -50%) rotate(${angle}rad)`,
    };

    return <div style={style} />;
});

export function mapToLine(positions: (Position | null)[], color?: string) {
    return positions.map((position, index, array) => {
        const nextPosition = array[index + 1];
        return position && nextPosition ? (
            <Line key={index} from={position} to={nextPosition} color={color} />
        ) : null;
    });
}
