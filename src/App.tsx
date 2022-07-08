import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { MasterDetail } from 'components/MasterDetail';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
    </MasterDetail>
  );
}
