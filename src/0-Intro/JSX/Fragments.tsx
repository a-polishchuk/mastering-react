import { ChapterWrapper } from 'components';
import { Fragment } from 'react';

function FewPoints(): JSX.Element {
  return (
    <>
      <li>Declarative</li>
      <li>Uni-directional data flow</li>
      <li>Virtual DOM</li>
      <li>Flexibility</li>
    </>
  );
}

function FewMorePoints(): JSX.Element {
  return (
    <Fragment>
      <li>Sometimes it has too much flexibility</li>
      <li>It's a library, not a framework</li>
      <li>Supports different platforms</li>
    </Fragment>
  );
}

export function Fragments(): JSX.Element {
  return (
    <ChapterWrapper title="Introduction to JSX" subtitle="React.Fragment">
      React is famous for:
      <ol>
        <FewPoints />
        <FewMorePoints />
      </ol>
    </ChapterWrapper>
  );
}
