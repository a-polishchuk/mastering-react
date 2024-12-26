import { ChapterWrapper } from 'components';
import { useEffect, useState } from 'react';

import { createMappedState } from './createMappedState';
import { Field } from './Field';

const useLowercaseState = createMappedState((newValue) => newValue.toLowerCase());
const useUppercaseState = createMappedState((newValue) => newValue.toUpperCase());
const useNoSpacesState = createMappedState((newValue) => newValue.replaceAll(/\s/g, ''));
const useNoNumbersState = createMappedState((newValue) => newValue.replaceAll(/[0-9]/g, ''));

export function HooksFactory() {
  const [originalValue, setOriginalValue] = useState<string>('Some Value 123');

  const [lowercase, setLowercase] = useLowercaseState('');
  const [uppercase, setUppercase] = useUppercaseState('');
  const [noSpaces, setNoSpaces] = useNoSpacesState('');
  const [noNumbers, setNoNumbers] = useNoNumbersState('');

  useEffect(() => {
    setLowercase(originalValue);
    setUppercase(originalValue);
    setNoSpaces(originalValue);
    setNoNumbers(originalValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalValue]);

  return (
    <ChapterWrapper title="Hooks factory" subtitle="Design patterns">
      <Field label="Regular input" value={originalValue} onChange={setOriginalValue} />
      <Field label="lowercase only" value={lowercase} onChange={setLowercase} />
      <Field label="UPPERCASE ONLY" value={uppercase} onChange={setUppercase} />
      <Field label="NoSpaces" value={noSpaces} onChange={setNoSpaces} />
      <Field label="No numbers" value={noNumbers} onChange={setNoNumbers} />
    </ChapterWrapper>
  );
}
