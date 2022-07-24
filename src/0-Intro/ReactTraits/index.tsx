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

      <div style={{ padding: 16 }}>
        <div>🗂 Declarative</div>
        <div>🌳 Virtual DOM</div>
        <div>⬇️ Unidirectional data flow</div>
        <div>📝 JSX - Special syntax to describe UI</div>
        <div>🏗 Components as main building blocks of your app</div>
        <div>🪝 Hooks helps to encapsulate business logic</div>
      </div>

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
