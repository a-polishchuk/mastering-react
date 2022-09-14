import { GridToolbar } from '7-StateManagement/components/GridToolbar';
import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';

import { useGridStore } from './useGridStore';

const GENERATION_DELAY = 200;

export function ToolbarController(): JSX.Element {
  const nextGeneration = useGridStore((state) => state.nextGeneration);
  const randomize = useGridStore((state) => state.randomize);
  const clear = useGridStore((state) => state.clear);

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
