import { ContactRow } from './ContactRow';
import { useContacts } from './ContactsContext';
import classes from './ContactsList.module.css';

export function ContactsList(): JSX.Element {
  const [state] = useContacts();
  const { contacts } = state;

  return (
    <div className={classes.list}>
      {contacts.map((contact) => (
        <ContactRow key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
