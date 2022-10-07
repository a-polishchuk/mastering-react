import { ChapterWrapper, TextBlock } from 'components';
import { Children, ReactNode } from 'react';

const NUMBERS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

function EmojiList({ children }: { children: ReactNode }): JSX.Element {
  const array = Children.toArray(children);
  return (
    <div>
      {array.map((child, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: 10 }}>{NUMBERS[index]}</div>
          {child}
        </div>
      ))}
    </div>
  );
}

export function CompoundComponent(): JSX.Element {
  return (
    <ChapterWrapper title="Compount component" subtitle="Design patterns">
      <TextBlock>
        <EmojiList>
          <div>Apple</div>
          <div>Pear</div>
          <div>Banana</div>
          <div>Orange</div>
        </EmojiList>
      </TextBlock>
    </ChapterWrapper>
  );
}
