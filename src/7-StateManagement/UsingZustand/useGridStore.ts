import { clear } from '7-StateManagement/model/clear';
import { empty } from '7-StateManagement/model/empty';
import { nextGeneration } from '7-StateManagement/model/nextGeneration';
import { randomize } from '7-StateManagement/model/randomize';
import { toggleCell } from '7-StateManagement/model/toggleCell';
import { GridState } from '7-StateManagement/types';
import create from 'zustand';

const GRID_SIZE = 30;

interface GridStore {
  grid: GridState;
  toggleCell: (row: number, col: number) => void;
  nextGeneration: () => void;
  randomize: () => void;
  clear: () => void;
}

export const useGridStore = create<GridStore>((set) => ({
  grid: empty(GRID_SIZE, GRID_SIZE),
  toggleCell: (row: number, col: number) => {
    return set(({ grid }) => ({ grid: toggleCell(grid, [row, col]) }));
  },
  nextGeneration: () => {
    return set(({ grid }) => ({ grid: nextGeneration(grid) }));
  },
  randomize: () => {
    return set(({ grid }) => ({ grid: randomize(grid) }));
  },
  clear: () => {
    return set(({ grid }) => ({ grid: clear(grid) }));
  },
}));
