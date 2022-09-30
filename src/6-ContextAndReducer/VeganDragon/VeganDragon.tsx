import { ChapterWrapper } from 'components';

import { GameContextProvider } from './GameContext/GameContext';
import { GameController } from './GameController/GameController';
import { GameControls } from './GameControls/GameControls';
import { GridController } from './grid/GridController';
import { Settings } from './Settings/Settings';
import { SettingsContextProvider } from './Settings/SettingsContext';

export function VeganDragon(): JSX.Element {
  return (
    <ChapterWrapper title="Vegan Dragon" subtitle="useContext + useReducer">
      <SettingsContextProvider>
        <GameContextProvider>
          <GameController />
          <GridController />
          <GameControls />
        </GameContextProvider>
        <Settings />
      </SettingsContextProvider>
    </ChapterWrapper>
  );
}
