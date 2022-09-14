import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';
import { CSSProperties } from 'react';

interface Props {
  grid: GridState;
  cellSize: number;
  toggleCell: (row: number, col: number) => void;
}

export function CheckboxGrid({ grid, cellSize, toggleCell }: Props): JSX.Element {
  const [rows, cols] = getGridSize(grid);

  const elements: JSX.Element[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      elements.push(
        <input
          key={`${r}_${c}`}
          type="checkbox"
          checked={grid[r][c] === CellState.ALIVE}
          onChange={() => toggleCell(r, c)}
          style={buildCellStyle(r, c, cellSize)}
        />
      );
    }
  }

  return <div style={buildGridStyle(rows, cols, cellSize)}>{elements}</div>;
}

function buildGridStyle(rows: number, cols: number, cellSize: number): CSSProperties {
  return {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${cellSize + 1}px)`,
    gridTemplateColumns: `repeat(${cols}, ${cellSize + 1}px)`,
  };
}

function buildCellStyle(row: number, col: number, cellSize: number): CSSProperties {
  return {
    gridRow: row + 1,
    gridColumn: col + 1,
    width: cellSize,
    height: cellSize,
  };
}
