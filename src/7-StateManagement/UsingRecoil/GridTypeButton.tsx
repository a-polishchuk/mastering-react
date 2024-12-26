import { Button } from 'components';
import { GridType } from './GridType';
import { UseState } from 'types/UseState';

type Props = {
  text: string;
  gridType: GridType;
  state: UseState<GridType>;
};

export function GridTypeButton({ text, gridType, state }: Props) {
  const [currentGridType, setGridType] = state;

  return (
    <Button
      text={text}
      onClick={() => setGridType(gridType)}
      disabled={gridType === currentGridType}
    />
  );
}
