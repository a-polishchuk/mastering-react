import { GridState } from './types';

export function getGridSize(grid: GridState): [number, number] {
    const rows = grid.length;
    const cols = grid[0].length;
    return [rows, cols];
}
