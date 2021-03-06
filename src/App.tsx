import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { ComponentsLifecycleSection } from '5-ComponentsLifecycle/ComponentsLifecycleSection';
import { ContextAndReducerSection } from '6-ContextAndReducer/ContextAndReducerSection';
import { MasterDetail } from 'components';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
      <ComponentsLifecycleSection />
      <ContextAndReducerSection />
    </MasterDetail>
  );
}
