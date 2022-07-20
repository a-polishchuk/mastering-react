import { GameContextProvider } from './GameContext';
import { Grid } from './Grid';
import { GameControls } from './GameControls';
import { Controller } from './Controller/Controller';

export function VeganDragon() {
  return (
    <GameContextProvider>
      <Controller />
      <Grid />
      <GameControls />
    </GameContextProvider>
  );
}
