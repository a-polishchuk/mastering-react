import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';
import { CSSProperties } from 'react';

import classes from './Grid.module.css';
import { useGridStore } from './useGridStore';

const CELL_SIZE = 15;

function buildGridStyle(rows: number, cols: number): CSSProperties {
  return {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
  };
}

function buildCellStyle(grid: GridState, row: number, col: number): CSSProperties {
  const isAlive = grid[row][col] === CellState.ALIVE;
  return {
    gridRow: row + 1,
    gridColumn: col + 1,
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: isAlive ? 'black' : 'white',
  };
}

export function Grid(): JSX.Element {
  const grid = useGridStore((state) => state.grid);
  const toggleCell = useGridStore((state) => state.toggleCell);
  const [rows, cols] = getGridSize(grid);

  const elements: JSX.Element[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      elements.push(
        <div
          key={`${r}_${c}`}
          className={classes.cell}
          onClick={() => toggleCell(r, c)}
          style={buildCellStyle(grid, r, c)}
        />
      );
    }
  }

  return <div style={buildGridStyle(rows, cols)}>{elements}</div>;
}
