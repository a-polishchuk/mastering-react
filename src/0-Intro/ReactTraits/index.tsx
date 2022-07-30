import { ChapterWrapper, TextBlock } from 'components';
import { useInterval } from 'hooks/useInterval';
import { useRerender } from 'hooks/useRerender';

import { TypicalComponent } from './TypicalComponent';

export function ReactTraits(): JSX.Element {
  const rerender = useRerender();

  useInterval(rerender, 3000);

  return (
    <ChapterWrapper title="React traits" subtitle="How React is different from other libraries?">
      <TextBlock>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, fontSize: 24 }}>
          <li>🗂 Declarative</li>
          <li>🌳 Virtual DOM</li>
          <li>⬇️ Unidirectional data flow</li>
          <li>📝 JSX - Special syntax to describe UI</li>
          <li>🏗 Components as main building blocks of your app</li>
          <li>🪝 Hooks helps to encapsulate business logic</li>
        </ul>
      </TextBlock>

      <div style={{ marginTop: 20, marginBottom: 10 }}>
        This is how a typical React app looks like:
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
    </ChapterWrapper>
  );
}
