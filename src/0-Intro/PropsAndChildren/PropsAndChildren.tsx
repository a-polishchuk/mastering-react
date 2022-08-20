import { ChapterWrapper } from 'components';

import { FamilyMember } from './FamilyMember';

export function PropsAndChildren(): JSX.Element {
  return (
    <ChapterWrapper
      title="Components, props and children"
      subtitle="How to manage child components"
    >
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
          {/* you can pass children as a regular property as well, but I think it's a bad practice */}
          <FamilyMember name="Mufasa" children={<FamilyMember name="Simba" />} />
        </FamilyMember>
      </FamilyMember>
    </ChapterWrapper>
  );
}
