import { ChapterWrapper } from 'components';
import { GameContextProvider } from './GameContext/GameContext';
import { GameController } from './GameController/GameController';
import { GameControls } from './GameControls/GameControls';
import { GridController } from './grid/GridController';
import classes from './index.module.css';
import { SettingsContextProvider } from './Settings/SettingsContext';
import { SettingsToolbar } from './Settings/SettingsToolbar';

export function VeganDragonChapter() {
    return (
        <ChapterWrapper title="Vegan Dragon" subtitle="useContext + useReducer">
            <div className={classes.root}>
                <SettingsContextProvider>
                    <SettingsToolbar />
                    <div className={classes.gridContainer}>
                        <GameContextProvider>
                            <GameController />
                            <GridController />
                            <GameControls />
                        </GameContextProvider>
                    </div>
                </SettingsContextProvider>
            </div>
        </ChapterWrapper>
    );
}
