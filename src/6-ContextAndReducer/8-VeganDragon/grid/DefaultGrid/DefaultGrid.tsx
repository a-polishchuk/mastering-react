import { ReactElement } from 'react';
import { getGridSize } from '../getGridSize';
import { GridProps } from '../GridProps';
import { Cell } from './Cell';
import classes from './DefaultGrid.module.css';

function mapCells(grid: string[][]): ReactElement[] {
    const [rowsCount, columnsCount] = getGridSize(grid);
    const cells: ReactElement[] = [];

    for (let i = 0; i < rowsCount; i++) {
        for (let j = 0; j < columnsCount; j++) {
            cells.push(<Cell key={`[${i}, ${j}]`} row={i + 1} col={j + 1} content={grid[i][j]} />);
        }
    }

    return cells;
}

export function DefaultGrid({ grid }: GridProps) {
    return (
        <div className={classes.gridContainer}>
            <div className={classes.grid}>{mapCells(grid)}</div>
        </div>
    );
}
