import { Button, ChapterWrapper, Toolbar } from 'components';
import { Provider } from 'jotai';
import { useState } from 'react';
import { GridController } from './GridController';
import { GridType } from './GridType';
import { GridTypeButton } from './GridTypeButton';
import { ToolbarController } from './ToolbarController';
import classes from './UsingJotai.module.css';

const MIN_CELL_SIZE = 4;
const MAX_CELL_SIZE = 30;
const INITIAL_CELL_SIZE = 16;
const CELL_SIZE_STEP = 4;

export function UsingJotai() {
    const gridTypeState = useState<GridType>(GridType.CHECKBOX);
    const [gridType] = gridTypeState;
    const [cellSize, setCellSize] = useState<number>(INITIAL_CELL_SIZE);

    const reduceSize = () => {
        setCellSize((value) => Math.max(value - CELL_SIZE_STEP, MIN_CELL_SIZE));
    };

    const increaseSize = () => {
        setCellSize((value) => Math.min(value + CELL_SIZE_STEP, MAX_CELL_SIZE));
    };

    return (
        <ChapterWrapper title="Jotai" subtitle="State management">
            <Provider>
                <div className={classes.root}>
                    <Toolbar>
                        <GridTypeButton
                            text="Checkbox grid"
                            gridType={GridType.CHECKBOX}
                            state={gridTypeState}
                        />
                        <GridTypeButton
                            text="Div grid"
                            gridType={GridType.DIV}
                            state={gridTypeState}
                        />
                        <Button text="Reduce size" onClick={reduceSize} />
                        <Button text="Increase size" onClick={increaseSize} />
                    </Toolbar>

                    <ToolbarController />

                    <div className={classes.gridContainer}>
                        <GridController gridType={gridType} cellSize={cellSize} />
                    </div>
                </div>
            </Provider>
        </ChapterWrapper>
    );
}
