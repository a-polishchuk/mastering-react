import { ChapterWrapper } from 'components';
import { RecoilRoot } from 'recoil';

import { GridController } from './GridController';
import { ToolbarController } from './ToolbarController';
import classes from './UsingRecoil.module.css';

export function UsingRecoil(): JSX.Element {
  return (
    <ChapterWrapper title="Recoil" subtitle="State management">
      <RecoilRoot>
        <div className={classes.root}>
          <ToolbarController />
          <div className={classes.gridContainer}>
            <GridController />
          </div>
        </div>
      </RecoilRoot>
    </ChapterWrapper>
  );
}
