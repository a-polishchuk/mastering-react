import { ChapterHeader } from 'components';

import { createMappedState } from './createMappedState';
import { Field } from './Field';

const useLowercaseState = createMappedState((newValue) => {
  return newValue?.toLowerCase();
});

const useUppercaseState = createMappedState((newValue) => {
  return newValue?.toUpperCase();
});

const useNoSpacesState = createMappedState((newValue) => {
  return newValue?.replaceAll(/\s/g, '');
});

export function HooksFactory(): JSX.Element {
  const [lowercase, setLowercase] = useLowercaseState('SOME VALUE');
  const [uppercase, setUppercase] = useUppercaseState('some value');
  const [noSpaces, setNoSpaces] = useNoSpacesState('  SOME VALUE    ');

  return (
    <>
      <ChapterHeader title="Design Patterns" subtitle="Hooks Factory" />
      <Field label="lowercase only" value={lowercase} onChange={setLowercase} />
      <Field label="UPPERCASE ONLY" value={uppercase} onChange={setUppercase} />
      <Field label="NoSpacesHere" value={noSpaces} onChange={setNoSpaces} />
    </>
  );
}
