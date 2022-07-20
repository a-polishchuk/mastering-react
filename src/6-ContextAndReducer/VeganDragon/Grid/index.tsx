import { useGameContext } from '../GameContext';
import { Cell } from './Cell';
import classes from './index.module.css';

function mapCells(grid: string[][]): JSX.Element[] {
  const rows = grid.length;
  const cols = grid[0].length;
  const cells: JSX.Element[] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push(<Cell key={`[${i}, ${j}]`} row={i + 1} col={j + 1} content={grid[i][j]} />);
    }
  }
  return cells;
}

export function Grid() {
  const [{ grid }] = useGameContext();

  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid}>{mapCells(grid)}</div>
    </div>
  );
}
