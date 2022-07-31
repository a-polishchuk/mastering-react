import { Button, ChapterWrapper } from 'components';
import { useToggle } from 'hooks/useToggle';

import { AlternativeGrid } from './AlternativeGrid';
import { Controller } from './Controller/Controller';
import { GameContextProvider } from './GameContext';
import { GameControls } from './GameControls';
import { Grid } from './Grid';

export function VeganDragon() {
  const [showAlternativeGrid, switchGrid] = useToggle(false);

  return (
    <ChapterWrapper title="Vegan Dragon" subtitle="useContext + useReducer">
      <GameContextProvider>
        <Controller />
        {showAlternativeGrid ? <AlternativeGrid /> : <Grid />}
        <GameControls />
      </GameContextProvider>

      <div style={{ position: 'absolute', right: 10, top: 10 }}>
        <Button text="Switch grid" onClick={switchGrid} />
      </div>
    </ChapterWrapper>
  );
}
