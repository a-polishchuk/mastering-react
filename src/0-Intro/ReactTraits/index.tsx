import { ChapterHeader } from 'components/ChapterHeader';
import { useInterval } from 'hooks/useInterval';
import { useRerender } from 'hooks/useRerender';

import { TypicalComponent } from './TypicalComponent';

export function ReactTraits(): JSX.Element {
  const rerender = useRerender();

  useInterval(rerender, 3000);

  return (
    <>
      <ChapterHeader title="React traits" />

      <ul>
        <li>🗂 Declarative</li>
        <li>🌳 Virtual DOM</li>
        <li>⬇️ Unidirectional data flow</li>
        <li>📝 JSX - Special syntax to describe UI</li>
        <li>🏗 Components as main building blocks of your app</li>
        <li>🪝 Hooks helps to encapsulate business logic</li>
      </ul>

      <TypicalComponent name="App" isRoot>
        <TypicalComponent name="Header">
          <TypicalComponent name="UserAvatar" />
          <TypicalComponent name="Login">
            <TypicalComponent name="Modal">
              <TypicalComponent name="Form" />
            </TypicalComponent>
          </TypicalComponent>
        </TypicalComponent>
        <TypicalComponent name="Dashboard">
          <TypicalComponent name="SomeChart">
            <TypicalComponent name="ChartLegend" />
          </TypicalComponent>
        </TypicalComponent>
      </TypicalComponent>
    </>
  );
}
