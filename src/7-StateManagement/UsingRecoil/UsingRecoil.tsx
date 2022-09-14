import { Button, ChapterWrapper, Toolbar, ToolbarSeparator } from 'components';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { GridController } from './GridController';
import { GridType } from './GridType';
import { GridTypeButton } from './GridTypeButton';
import { ToolbarController } from './ToolbarController';
import classes from './UsingRecoil.module.css';

const MIN_CELL_SIZE = 4;
const MAX_CELL_SIZE = 30;
const INITIAL_CELL_SIZE = 16;
const CELL_SIZE_STEP = 4;

export function UsingRecoil(): JSX.Element {
  const gridTypeState = useState<GridType>(GridType.CHECKBOX);
  const [gridType] = gridTypeState;
  const [cellSize, setCellSize] = useState<number>(INITIAL_CELL_SIZE);

  const decreaseCellSize = () => {
    setCellSize((value) => Math.max(value - CELL_SIZE_STEP, MIN_CELL_SIZE));
  };

  const increaseCellSize = () => {
    setCellSize((value) => Math.min(value + CELL_SIZE_STEP, MAX_CELL_SIZE));
  };

  return (
    <ChapterWrapper title="Recoil" subtitle="State management">
      <RecoilRoot>
        <div className={classes.root}>
          <Toolbar>
            <GridTypeButton gridType={GridType.CHECKBOX} state={gridTypeState} />
            <GridTypeButton gridType={GridType.DIV} state={gridTypeState} />
            <ToolbarSeparator />
            <Button text="➖ Cell size" onClick={decreaseCellSize} />
            <Button text="➕ Cell size" onClick={increaseCellSize} />
          </Toolbar>

          <ToolbarController />

          <div className={classes.gridContainer}>
            <GridController gridType={gridType} cellSize={cellSize} />
          </div>
        </div>
      </RecoilRoot>
    </ChapterWrapper>
  );
}
