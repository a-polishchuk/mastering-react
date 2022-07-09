import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { Chapter, MasterDetail } from 'components/MasterDetail';
import { KeysToReact } from 'KeysToReact/KeysToReact';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <Chapter title="Keys to React" component={KeysToReact} />
    </MasterDetail>
  );
}
