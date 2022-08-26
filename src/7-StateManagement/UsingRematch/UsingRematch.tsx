import { ChapterWrapper } from 'components';
import { Provider } from 'react-redux';

import { Grid } from './Grid';
import { GridController } from './GridController';
import { store } from './store';
import classes from './UsingRematch.module.css';

export function UsingRematch(): JSX.Element {
  return (
    <ChapterWrapper title="Rematch (Redux)" subtitle="State management">
      <Provider store={store}>
        <div className={classes.root}>
          <GridController />
          <div className={classes.gridContainer}>
            <Grid />
          </div>
        </div>
      </Provider>
    </ChapterWrapper>
  );
}
