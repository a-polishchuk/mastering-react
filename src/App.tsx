import { IntroSection } from '0-Intro/IntroSection';
import { MasterDetail } from 'components/MasterDetail';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <IntroSection />
    </MasterDetail>
  );
}
