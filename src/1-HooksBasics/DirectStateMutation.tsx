import { Button, ChapterWrapper, EmojiButton, Label, PropsTable, Toolbar } from 'components';
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

type User = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  country: string;
  addressLine1: string;
  addressLine2?: string;
};

const INITIAL_VALUE: User = {
  id: '1',
  firstName: 'Taras',
  middleName: 'Hryhorovych',
  lastName: 'Shevchenko',
  country: 'Ukraine',
  addressLine1: 'Cherkasy',
};

function buildChangeHandler(
  setter: Dispatch<SetStateAction<string>>
): ChangeEventHandler<HTMLInputElement> {
  return (event: ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };
}

export function DirectStateMutation() {
  const [user, setUser] = useState<User>(INITIAL_VALUE);
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [userEmoji, setUserEmoji] = useState<string>('👤');

  const applyLine1 = () => {
    setUser((value) => ({
      ...value,
      addressLine1,
    }));
  };

  const applyLine2 = () => {
    // ! the bad way to modify state, don't do that !
    user.addressLine2 = addressLine2;
  };

  return (
    <ChapterWrapper title="Direct state mutation" subtitle="Hooks basics, useState">
      <Toolbar>
        <Label text="Address line 1" />
        <input type="text" value={addressLine1} onChange={buildChangeHandler(setAddressLine1)} />
        <Button text="Apply via setState" onClick={applyLine1} />
      </Toolbar>

      <Toolbar>
        <Label text="Address line 2" />
        <input type="text" value={addressLine2} onChange={buildChangeHandler(setAddressLine2)} />
        <Button text="Apply directly" onClick={applyLine2} />
      </Toolbar>

      <Toolbar>
        <EmojiButton emoji="👤" onClick={() => setUserEmoji('👤')} disabled={userEmoji === '👤'} />
        <EmojiButton emoji="🥷" onClick={() => setUserEmoji('🥷')} disabled={userEmoji === '🥷'} />
      </Toolbar>

      <PropsTable title={`${userEmoji} User`} data={user} />
    </ChapterWrapper>
  );
}
