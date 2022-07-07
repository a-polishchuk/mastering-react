import { useInterval } from 'hooks/useInterval';
import { useRerender } from 'hooks/useRerender';

import { TypicalComponent } from './TypicalComponent';

export function ReactTraits(): JSX.Element {
  const rerender = useRerender();

  useInterval(rerender, 3000);

  return (
    <>
      <h3>React traits</h3>
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
