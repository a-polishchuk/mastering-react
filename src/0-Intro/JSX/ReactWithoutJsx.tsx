import { ChapterWrapper } from 'components';
import { createElement } from 'react';

export function ReactWithoutJsx() {
  const props = {
    title: 'React without JSX',
    subtitle: 'Introduction to JSX',
    children: createElement(
      'p',
      { style: { fontSize: '18px' } },
      `You don't have to use JSX, but the code is much harder to work without it.`
    ),
  };
  return createElement(ChapterWrapper, props);
}

export function SameThingWithJsx() {
  return (
    <ChapterWrapper title="Same thing with JSX" subtitle="Introduction to JSX">
      <p style={{ fontSize: '18px' }}>
        You don't have to use JSX, but the code is much harder to read without it.
      </p>
    </ChapterWrapper>
  );
}
