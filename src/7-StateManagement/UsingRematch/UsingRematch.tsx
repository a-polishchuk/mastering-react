import { ChapterWrapper } from 'components';
import { Provider } from 'react-redux';
import { GridController } from './GridController';
import { store } from './store';
import { ToolbarController } from './ToolbarController';
import classes from './UsingRematch.module.css';

export function UsingRematch() {
    return (
        <ChapterWrapper title="Rematch (Redux)" subtitle="State management">
            <Provider store={store}>
                <div className={classes.root}>
                    <ToolbarController />
                    <div className={classes.gridContainer}>
                        <GridController />
                    </div>
                </div>
            </Provider>
        </ChapterWrapper>
    );
}
