import { ChapterWrapper, ColoredBlock, Toolbar } from 'components';
import { useState } from 'react';
import { useWhatCausedRender } from './useWhatCausedRender';

interface BadgeProps {
  firstName: string;
  lastName: string;
}

function Badge(props: BadgeProps): JSX.Element {
  const { firstName, lastName } = props;

  useWhatCausedRender('Badge', props);

  return (
    <ColoredBlock>
      😑 {firstName} {lastName}
    </ColoredBlock>
  );
}

export function UseWhatCausedRenderExample(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <ChapterWrapper title="useWhatCausedRender" subtitle="More custom hooks">
      <Toolbar>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Toolbar>
      <Badge firstName={firstName} lastName={lastName} />
    </ChapterWrapper>
  );
}
