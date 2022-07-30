import { ChapterWrapper } from 'components';
import { createElement } from 'react';

export function ReactWithoutJsx() {
  return createElement(ChapterWrapper, {
    title: 'Introduction to JSX',
    subtitle: 'React.createElement()',
    children: createElement(
      'p',
      { style: { fontSize: '18px' } },
      `You don't have to use JSX, but the code is much harder to work without it.`
    ),
  });
}

export function SameThingWithJsx(): JSX.Element {
  return (
    <ChapterWrapper title="Introduction to JSX" subtitle="React.createElement()">
      <p style={{ fontSize: '18px' }}>
        You don't have to use JSX, but the code is much harder to read without it.
      </p>
    </ChapterWrapper>
  );
}
