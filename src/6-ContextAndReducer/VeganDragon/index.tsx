import { ChapterWrapper } from 'components';

import { Controller } from './Controller/Controller';
import { GameContextProvider } from './GameContext';
import { GameControls } from './GameControls';
import { Grid } from './Grid';

export function VeganDragon() {
  return (
    <ChapterWrapper title="Vegan Dragon" subtitle="useContext + useReducer">
      <GameContextProvider>
        <Controller />
        <Grid />
        <GameControls />
      </GameContextProvider>
    </ChapterWrapper>
  );
}
