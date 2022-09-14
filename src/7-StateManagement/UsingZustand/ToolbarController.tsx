import { GridToolbar } from '7-StateManagement/components/GridToolbar';
import { useAutoGeneration } from '7-StateManagement/useAutoGeneration';

import { useGridStore } from './useGridStore';

const GENERATION_DELAY = 500;

export function ToolbarController(): JSX.Element {
  const nextGeneration = useGridStore((state) => state.nextGeneration);
  const randomize = useGridStore((state) => state.randomize);
  const clear = useGridStore((state) => state.clear);

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
