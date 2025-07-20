import { CSSProperties, memo } from 'react';
import { CellType } from '../../types';

function getStyle(gridRow: number, gridColumn: number, isSnake: boolean): CSSProperties {
    return {
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
        gridRow,
        gridColumn,
        backgroundColor: isSnake ? '#2B27' : '#FFF',
        border: `1px solid ${isSnake ? '#2B2' : '#DDD'}`,
    };
}

type Props = {
    row: number;
    col: number;
    content: string;
};

export const Cell = memo(({ row, col, content }: Props) => {
    const isSnake = content === CellType.SNAKE || content === CellType.SNAKE_HEAD;
    const style = getStyle(row, col, isSnake);

    return <div style={style}>{content === CellType.SNAKE ? '' : content}</div>;
});
