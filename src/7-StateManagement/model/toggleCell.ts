import { CellState, GridState } from '7-StateManagement/types';
import { cloneDeep } from 'lodash';

export function toggleCell(grid: GridState, payload: [number, number]): GridState {
    const [row, col] = payload;
    const newGrid = cloneDeep(grid);
    newGrid[row][col] = newGrid[row][col] === CellState.ALIVE ? CellState.DEAD : CellState.ALIVE;
    return newGrid;
}
