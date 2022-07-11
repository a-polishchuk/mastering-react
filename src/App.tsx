import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { MasterDetail } from 'components/MasterDetail';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
    </MasterDetail>
  );
}
