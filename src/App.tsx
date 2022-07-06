import { Button } from 'components/Button';
import { Chapter, MasterDetail, Section } from 'components/MasterDetail';

export function App(): JSX.Element {
  return (
    <MasterDetail>
      <Section title="Section 1">
        <Chapter title="Chapter" component={Button} />
      </Section>
      <Section title="Section 2">
        <Chapter title="Chapter" component={Button} />
      </Section>
    </MasterDetail>
  );
}
