import { Button } from 'components';
import { Toolbar } from 'components';
import { useContacts } from './ContactsContext';
import { ActionType } from './types';

export function ContactsToolbar() {
    const [state, dispatch] = useContacts();
    const { selectedId } = state;

    const add = () => {
        dispatch({ type: ActionType.ADD });
    };

    const removeSelected = () => {
        if (selectedId) {
            dispatch({
                type: ActionType.REMOVE,
                idToRemove: selectedId,
            });
        } else {
            throw new Error('No contact selected');
        }
    };

    const rollbackChanges = () => {
        dispatch({
            type: ActionType.ROLLBACK,
        });
    };

    return (
        <Toolbar>
            <Button text="Add" onClick={add} />
            {selectedId && <Button text="Remove" onClick={removeSelected} />}
            <Button text="Rollback changes" onClick={rollbackChanges} />
        </Toolbar>
    );
}
