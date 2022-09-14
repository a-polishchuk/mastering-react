import { Button } from 'components';
import { UseState } from 'types/UseState';

import { GridType } from './GridType';

interface Props {
  gridType: GridType;
  state: UseState<GridType>;
}

export function GridTypeButton({ gridType, state }: Props): JSX.Element {
  const [currentGridType, setGridType] = state;

  return (
    <Button
      text="Checkbox Grid"
      onClick={() => setGridType(gridType)}
      disabled={gridType === currentGridType}
    />
  );
}
