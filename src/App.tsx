import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { React19Section } from '10-React19/React19Section';
import { MiscSection } from '11-Misc/MiscSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { ComponentsLifecycleSection } from '5-ComponentsLifecycle/ComponentsLifecycleSection';
import { ContextAndReducerSection } from '6-ContextAndReducer/ContextAndReducerSection';
import { StateManagementSection } from '7-StateManagement/StateManagementSection';
import { DataFecthingSection } from '8-DataFetching/DataFetchingSection';
import { MoreCustomHooksSection } from '9-MoreCustomHooks/MoreCustomHooksSection';
import { MasterDetail } from 'components';
import { RouterPath } from 'config/RouterPath';
import { NavLink } from 'react-router-dom';
import { cn } from 'utils/cn';
import classes from './App.module.css';

export function App() {
    return (
        <MasterDetail>
            <IntroSection />
            <HooksBasicsSection />
            <SideEffectsSection />
            <ImperativeCodeSection />
            <MemoizationSection />
            <ComponentsLifecycleSection />
            <ContextAndReducerSection />
            <StateManagementSection />
            <DataFecthingSection />
            <MoreCustomHooksSection />
            <React19Section />
            <MiscSection />

            <div className={classes.linksSection}>
                <NavLink
                    to={RouterPath.ABOUT}
                    className={({ isActive }) => cn(classes.link, isActive && classes.activeLink)}
                >
                    📚 Про цей курс
                </NavLink>
            </div>
        </MasterDetail>
    );
}
