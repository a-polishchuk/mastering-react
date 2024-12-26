import { CheckboxGrid } from '7-StateManagement/components/CheckboxGrid';
import { GridState } from '7-StateManagement/types';
import { useDispatch, useSelector } from 'react-redux';

import { Dispatch, RootState } from './store';

const CELL_SIZE = 16;

function gridSelector(state: RootState): GridState {
  return state.grid;
}

export function GridController() {
  const grid = useSelector<RootState, GridState>(gridSelector);
  const dispatch = useDispatch<Dispatch>();

  const toggleCell = (row: number, col: number) => {
    return dispatch.grid.toggleCell([row, col]);
  };

  return <CheckboxGrid grid={grid} cellSize={CELL_SIZE} toggleCell={toggleCell} />;
}
