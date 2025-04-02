import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { MoreCustomHooksSection } from '10-MoreCustomHooks/MoreCustomHooksSection';
import { React19Section } from '11-React19/React19Section';
import { MiscSection } from '12-Misc/MiscSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { ComponentsLifecycleSection } from '5-ComponentsLifecycle/ComponentsLifecycleSection';
import { ContextAndReducerSection } from '6-ContextAndReducer/ContextAndReducerSection';
import { StateManagementSection } from '7-StateManagement/StateManagementSection';
import { DataFecthingSection } from '8-DataFetching/DataFetchingSection';
import { RoutingSection } from '9-Routing/RoutingSection';
import { MasterDetail } from 'components';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { RouterPath } from 'config/RouterPath';
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
            <RoutingSection />
            <MoreCustomHooksSection />
            <React19Section />
            <MiscSection />

            <div className={classes.linksSection}>
                <StyledLink to={RouterPath.ABOUT}>📚 Про цей курс</StyledLink>
                <a
                    href="https://a-polishchuk.github.io/mastering-react/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    [⚛️ Production версія]
                </a>
            </div>
        </MasterDetail>
    );
}
