import { CellState, GridState } from '7-StateManagement/types';
import { getGridSize } from '7-StateManagement/utils';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, RootState } from './store';

const CELL_SIZE = 16;

function gridSelector(state: RootState): GridState {
  return state.grid;
}

export function Grid(): JSX.Element {
  const grid = useSelector<RootState, GridState>(gridSelector);
  const dispatch = useDispatch<Dispatch>();
  const [rows, cols] = getGridSize(grid);

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, ${CELL_SIZE + 1}px)`,
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE + 1}px)`,
  };

  const elements: JSX.Element[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      elements.push(
        <input
          key={`${r}_${c}`}
          type="checkbox"
          checked={grid[r][c] === CellState.ALIVE}
          onChange={() => dispatch.grid.toggleCell([r, c])}
          style={{
            gridRow: r + 1,
            gridColumn: c + 1,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      );
    }
  }

  return <div style={gridStyle}>{elements}</div>;
}
