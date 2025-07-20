export function getGridSize(grid: any[][]): [number, number] {
    const rows = grid.length;
    const cols = grid[0].length;
    return [rows, cols];
}
