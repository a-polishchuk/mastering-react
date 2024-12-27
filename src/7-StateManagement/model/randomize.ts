import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';

export function randomize(grid: GridState): GridState {
    const [rows, cols] = getGridSize(grid);
    const newGrid: GridState = new Array<number[]>(rows);
    for (let r = 0; r < rows; r++) {
        const row = new Array<number>(cols);
        newGrid[r] = row;
        for (let c = 0; c < cols; c++) {
            row[c] = Math.random() > 0.5 ? CellState.ALIVE : CellState.DEAD;
        }
    }
    return newGrid;
}
