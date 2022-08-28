import { ChapterWrapper } from 'components';

import { Grid } from './Grid';
import { GridController } from './GridController';
import classes from './UsingZustand.module.css';

export function UsingZustand(): JSX.Element {
  return (
    <ChapterWrapper title="Zustand" subtitle="State management">
      <div className={classes.root}>
        <GridController />
        <div className={classes.gridContainer}>
          <Grid />
        </div>
      </div>
    </ChapterWrapper>
  );
}
