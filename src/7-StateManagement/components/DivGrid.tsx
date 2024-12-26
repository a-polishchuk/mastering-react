import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';
import { CSSProperties } from 'react';
import { ReactElement } from 'react';
import { generateRandomColor } from 'utils/generateRandomColor';
import classes from './DivGrid.module.css';

type Props = {
  grid: GridState;
  cellSize: number;
  toggleCell: (row: number, col: number) => void;
};

export function DivGrid({ grid, cellSize, toggleCell }: Props) {
  const [rows, cols] = getGridSize(grid);

  const elements: ReactElement[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      elements.push(
        <div
          key={`${r}_${c}`}
          className={classes.cell}
          onClick={() => toggleCell(r, c)}
          style={buildCellStyle(grid, r, c, cellSize)}
        />
      );
    }
  }

  return (
    <div className={classes.grid} style={buildGridStyle(rows, cols, cellSize)}>
      {elements}
    </div>
  );
}

function buildGridStyle(rows: number, cols: number, cellSize: number): CSSProperties {
  return {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
  };
}

function buildCellStyle(
  grid: GridState,
  row: number,
  col: number,
  cellSize: number
): CSSProperties {
  const isAlive = grid[row][col] === CellState.ALIVE;
  return {
    gridRow: row + 1,
    gridColumn: col + 1,
    width: cellSize,
    height: cellSize,
    backgroundColor: isAlive ? generateRandomColor() : 'white',
  };
}
