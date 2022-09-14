import { CheckboxGrid } from '7-StateManagement/components/CheckboxGrid';
import { toggleCell } from '7-StateManagement/model/toggleCell';
import { useRecoilState } from 'recoil';

import { gridAtom } from './gridAtom';

const CELL_SIZE = 20;

// TODO: take cellSize and grid component from the context
export function GridController(): JSX.Element {
  const [grid, setGrid] = useRecoilState(gridAtom);

  const toggle = (row: number, col: number) => {
    setGrid((currValue) => toggleCell(currValue, [row, col]));
  };

  return <CheckboxGrid grid={grid} cellSize={CELL_SIZE} toggleCell={toggle} />;
}
