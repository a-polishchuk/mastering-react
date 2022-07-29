import { ChapterHeader } from 'components';

import { FamilyMember } from './FamilyMember';

export function PropsAndChildren(): JSX.Element {
  return (
    <>
      <ChapterHeader title="Introduction to JSX" subtitle="Components, props and children" />

      <FamilyMember name="Jack">
        <FamilyMember name="John">
          <FamilyMember name="Leo">
            <FamilyMember name="Bella" />
            <FamilyMember name="Loki">
              <FamilyMember name="Mia" />
              <FamilyMember name="Candy" />
            </FamilyMember>
          </FamilyMember>
        </FamilyMember>
        <FamilyMember name="Jill">
          <FamilyMember name="Fluffy" />
          <FamilyMember name="Tiger" />
          <FamilyMember name="Mufasa">
            <FamilyMember name="Simba" />
          </FamilyMember>
        </FamilyMember>
      </FamilyMember>
    </>
  );
}
