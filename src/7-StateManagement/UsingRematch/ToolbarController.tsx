import { GridToolbar } from '7-StateManagement/components/GridToolbar';
import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { useDispatch } from 'react-redux';

import { Dispatch } from './store';

const GENERATION_DELAY = 500;

export function ToolbarController(): JSX.Element {
  const { grid } = useDispatch<Dispatch>();

  const nextGeneration = () => grid.nextGeneration();
  const randomize = () => grid.randomize();
  const clear = () => grid.clear();

  // TODO: move to a separate hook?
  const [isAutoGenerating, toggleAutoGeneration] = useToggle(false);
  const generationDelay = isAutoGenerating ? GENERATION_DELAY : null;
  useInterval(nextGeneration, generationDelay);

  return (
    <GridToolbar
      isAutoGenerating={isAutoGenerating}
      toggleAutoGeneration={toggleAutoGeneration}
      nextGeneration={nextGeneration}
      randomize={randomize}
      clear={clear}
    />
  );
}
