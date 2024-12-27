import { GridState, CellState } from '7-StateManagement/types';

export function empty(rows: number, cols: number): GridState {
    const grid: GridState = new Array<number[]>(rows);
    for (let r = 0; r < rows; r++) {
        grid[r] = new Array<number>(cols).fill(CellState.DEAD);
    }
    return grid;
}
