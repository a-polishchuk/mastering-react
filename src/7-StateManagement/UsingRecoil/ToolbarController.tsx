import { GridToolbar } from '7-StateManagement/components/GridToolbar';
import { clear } from '7-StateManagement/model/clear';
import { nextGeneration } from '7-StateManagement/model/nextGeneration';
import { randomize } from '7-StateManagement/model/randomize';
import { useAutoGeneration } from '7-StateManagement/useAutoGeneration';
import { useRecoilState } from 'recoil';

import { gridAtom } from './gridAtom';

const GENERATION_DELAY = 500;

export function ToolbarController(): JSX.Element {
  const [, setGrid] = useRecoilState(gridAtom);

  const setNextGen = () => setGrid((value) => nextGeneration(value));
  const setRandomized = () => setGrid((value) => randomize(value));
  const setCleared = () => setGrid((value) => clear(value));

  const [isAutoGenerating, toggleAutoGeneration] = useAutoGeneration(GENERATION_DELAY, setNextGen);

  return (
    <GridToolbar
      isAutoGenerating={isAutoGenerating}
      toggleAutoGeneration={toggleAutoGeneration}
      nextGeneration={setNextGen}
      randomize={setRandomized}
      clear={setCleared}
    />
  );
}
