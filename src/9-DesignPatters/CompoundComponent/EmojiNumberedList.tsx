import { Children, ReactNode } from 'react';

const NUMBERS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

function getEmojiNumber(n: number): string {
  return n
    .toFixed(0)
    .split('')
    .map((char) => NUMBERS[parseInt(char)])
    .join('');
}

export function EmojiNumberedList({ children }: { children: ReactNode }) {
  const array = Children.toArray(children);

  return (
    <>
      {array.map((child, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: 10 }}>{getEmojiNumber(index + 1)}</div>
          {child}
        </div>
      ))}
    </>
  );
}
