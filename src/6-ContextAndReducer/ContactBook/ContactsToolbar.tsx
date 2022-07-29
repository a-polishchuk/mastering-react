import { Button } from 'components';
import { Toolbar } from 'components/Toolbar';

import { useContacts } from './ContactsContext';
import { ActionType } from './types';

export function ContactsToolbar(): JSX.Element {
  const [state, dispatch] = useContacts();
  const { selectedId } = state;

  const add = () => dispatch({ type: ActionType.ADD });

  const removeSelected = () =>
    dispatch({
      type: ActionType.REMOVE,
      payload: { id: selectedId },
    });

  const rollbackChanges = () =>
    dispatch({
      type: ActionType.ROLLBACK,
    });

  return (
    <Toolbar>
      <Button text="Add" onClick={add} />
      {selectedId && <Button text="Remove" onClick={removeSelected} />}
      <Button text="Rollback changes" onClick={rollbackChanges} />
    </Toolbar>
  );
}
