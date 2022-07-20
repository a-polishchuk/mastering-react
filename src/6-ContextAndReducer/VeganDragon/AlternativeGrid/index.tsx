import { useGameContext } from '../GameContext';
import { Cell } from './Cell';
import classes from './index.module.css';

export function mapCells(grid: string[][]): JSX.Element[] {
  const totalRows = grid.length;
  const totalCols = grid[0].length;
  const rows = new Array<JSX.Element>(totalRows);

  for (let r = 0; r < totalRows; r++) {
    const cells = new Array<JSX.Element>(totalCols);
    for (let c = 0; c < totalCols; c++) {
      cells[c] = <Cell key={`[${r}, ${c}]`} content={grid[r][c]} />;
    }
    rows[r] = <tr key={`row_${r}`}>{cells}</tr>;
  }

  return rows;
}

export function AlternativeGrid(): JSX.Element {
  const [{ grid }] = useGameContext();

  return (
    <div className={classes.gridContainer}>
      <table>
        <tbody>{mapCells(grid)}</tbody>
      </table>
    </div>
  );
}
