import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';

import { empty } from './empty';

const NEIGHBORS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function nextGeneration(grid: GridState): GridState {
  const [rows, cols] = getGridSize(grid);
  const newGrid: GridState = empty(rows, cols);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      newGrid[r][c] = getNextCellState(grid, r, c);
    }
  }
  return newGrid;
}

function getNextCellState(grid: GridState, row: number, col: number): CellState {
  let aliveNeighbors = 0;
  NEIGHBORS.forEach(([r, c]) => {
    const neighborRow = grid[row + r];
    if (neighborRow && neighborRow[col + c] === CellState.ALIVE) {
      aliveNeighbors++;
    }
  });

  if (grid[row][col] === CellState.ALIVE) {
    return aliveNeighbors === 2 || aliveNeighbors === 3 ? CellState.ALIVE : CellState.DEAD;
  } else {
    return aliveNeighbors === 3 ? CellState.ALIVE : CellState.DEAD;
  }
}
