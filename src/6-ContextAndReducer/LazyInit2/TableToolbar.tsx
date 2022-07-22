import { Button } from 'components/Button';
import { Toolbar } from 'components/Toolbar';
import { Dispatch } from 'react';

import { Action, ActionType } from './types';

interface ActionButtonProps {
  text: string;
  actionType: ActionType;
  dispatch: Dispatch<Action>;
}

function ActionButton({ text, actionType, dispatch }: ActionButtonProps): JSX.Element {
  return <Button text={text} onClick={() => dispatch({ type: actionType })} />;
}

export function TableToolbar({ dispatch }: { dispatch: Dispatch<Action> }): JSX.Element {
  return (
    <Toolbar>
      <ActionButton text="⬆️ Sort" actionType={ActionType.SORT_ASC} dispatch={dispatch} />
      <ActionButton text="⬇️ Sort" actionType={ActionType.SORT_DESC} dispatch={dispatch} />
      <ActionButton text="🔀 Shuffle" actionType={ActionType.SHUFFLE} dispatch={dispatch} />
    </Toolbar>
  );
}
