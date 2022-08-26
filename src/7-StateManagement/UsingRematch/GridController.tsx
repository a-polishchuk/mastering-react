import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { useDispatch } from 'react-redux';

import { ControlsBar } from '../ControlsBar';
import { Dispatch } from './store';

const GENERATION_DELAY = 500;

export function GridController(): JSX.Element {
  const dispatch = useDispatch<Dispatch>();
  const nextGeneration = () => dispatch.grid.nextGeneration();
  const randomize = () => dispatch.grid.randomize();
  const clear = () => dispatch.grid.clear();

  const [isAutoGenerating, toggleAutoGeneration] = useToggle(false);
  const generationDelay = isAutoGenerating ? GENERATION_DELAY : null;
  useInterval(nextGeneration, generationDelay);

  return (
    <ControlsBar
      isAutoGenerating={isAutoGenerating}
      toggleAutoGeneration={toggleAutoGeneration}
      nextGeneration={nextGeneration}
      randomize={randomize}
      clear={clear}
    />
  );
}
