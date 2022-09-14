import { GridToolbar } from '7-StateManagement/components/GridToolbar';
import { useAutoGeneration } from '7-StateManagement/useAutoGeneration';
import { useDispatch } from 'react-redux';

import { Dispatch } from './store';

const GENERATION_DELAY = 500;

export function ToolbarController(): JSX.Element {
  const { grid } = useDispatch<Dispatch>();

  const nextGeneration = () => grid.nextGeneration();
  const randomize = () => grid.randomize();
  const clear = () => grid.clear();

  const [isAutoGenerating, toggleAutoGeneration] = useAutoGeneration(
    GENERATION_DELAY,
    nextGeneration
  );

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
