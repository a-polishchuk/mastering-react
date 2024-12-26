import { ChangeEventHandler, CSSProperties, useState } from 'react';
import classes from './ContactRow.module.css';
import { useContacts } from './ContactsContext';
import { ActionType, Contact } from './types';

function buildStyle(selected: boolean): CSSProperties {
  return {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    border: selected ? '2px solid #cccccc' : '2px dotted #cccccc',
    boxShadow: selected ? '3px 3px 0px 0px #eadff9' : '',
  };
}

export function ContactRow({ contact }: { contact: Contact }) {
  const { name, phone } = contact;
  const avatarUrl = `https://cataas.com/cat?${name}`;

  const [state, dispatch] = useContacts();
  const { selectedId } = state;
  const isSelected = contact.id === selectedId;

  const [isEditingName, setEditingName] = useState<boolean>(false);
  const [isEditingPhone, setEditingPhone] = useState<boolean>(false);

  const select = () =>
    dispatch({
      type: ActionType.SELECT,
      payload: { id: contact.id },
    });

  const startEditingName = () => setEditingName(true);
  const stopEditingName = () => setEditingName(false);
  const editName: ChangeEventHandler<HTMLInputElement> = (event) =>
    dispatch({
      type: ActionType.EDIT,
      payload: {
        ...contact,
        name: event.target.value,
      },
    });

  const startEditingPhone = () => setEditingPhone(true);
  const stopEditingPhone = () => setEditingPhone(false);
  const editPhone: ChangeEventHandler<HTMLInputElement> = (event) =>
    dispatch({
      type: ActionType.EDIT,
      payload: {
        ...contact,
        phone: event.target.value,
      },
    });

  return (
    <div style={buildStyle(isSelected)} onClick={select}>
      <img src={avatarUrl} className={classes.avatar} alt="Contact avatar" />
      <div className={classes.fieldsWrapper}>
        <div className={classes.field}>
          <span className={classes.emoji} onClick={startEditingName}>
            🐱
          </span>
          {isEditingName ? (
            <input
              autoFocus
              type="text"
              value={name}
              onChange={editName}
              onBlur={stopEditingName}
            />
          ) : (
            <span onClick={startEditingName}>{name}</span>
          )}
        </div>

        <div className={classes.field}>
          <span className={classes.emoji} onClick={startEditingPhone}>
            ☎️
          </span>
          {isEditingPhone ? (
            <input
              autoFocus
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phone}
              onChange={editPhone}
              onBlur={stopEditingPhone}
            />
          ) : (
            <span onClick={startEditingPhone}>{phone}</span>
          )}
        </div>
      </div>
    </div>
  );
}
