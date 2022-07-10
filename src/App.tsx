import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { Chapter, MasterDetail } from 'components/MasterDetail';
import { KeysToReact } from 'KeysToReact/KeysToReact';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <SideEffectsSection />
      <Chapter title="Keys to React" component={KeysToReact} />
    </MasterDetail>
  );
}
