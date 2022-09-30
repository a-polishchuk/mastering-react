import { Cell } from './Cell';
import classes from './AlternativeGrid.module.css';
import { getGridSize } from '../getGridSize';
import { GridProps } from '../GridProps';

export function mapCells(grid: string[][]): JSX.Element[] {
  const [rowsCount, columnsCount] = getGridSize(grid);
  const rows = new Array<JSX.Element>(rowsCount);

  for (let r = 0; r < rowsCount; r++) {
    const cells = new Array<JSX.Element>(columnsCount);
    for (let c = 0; c < columnsCount; c++) {
      cells[c] = <Cell key={`[${r}, ${c}]`} content={grid[r][c]} />;
    }
    rows[r] = <tr key={`row_${r}`}>{cells}</tr>;
  }

  return rows;
}

export function AlternativeGrid({ grid }: GridProps): JSX.Element {
  return (
    <div className={classes.gridContainer}>
      <table>
        <tbody>{mapCells(grid)}</tbody>
      </table>
    </div>
  );
}
