import { GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';
import { empty } from './empty';

export function clear(grid: GridState): GridState {
    const [rows, cols] = getGridSize(grid);
    return empty(rows, cols);
}
