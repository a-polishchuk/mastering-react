import { Button, ChapterWrapper, ColoredBlock, EmojiButton, PropsTable, Toolbar, ValueLabel } from 'components';
import { useRerender } from 'hooks/useRerender';
import { ReactElement } from 'react';
import { useState } from 'react';
import { logTagged } from 'utils/logTagged';

enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

type User = {
  id: string;
  name: string;
  role: UserRole;
};

const DEFAULT_USER: User = {
  id: '1',
  name: 'John Doe',
  role: UserRole.ADMIN,
};

const EMOJIS: string[] = ['🗺', '🗿', '🏟', '🗼', '🏯', '🎡'];

export function UseStateAndNewRenders(): ReactElement {
  const [emoji, setEmoji] = useState<string>(EMOJIS[0]);
  const [user, setUser] = useState<User>(DEFAULT_USER);

  const rerender = useRerender();

  const mapToEmojiButton = (e: string): ReactElement => {
    const onClick = () => {
      logTagged('setState', e);
      setEmoji(e);
    };
    return <EmojiButton key={e} emoji={e} onClick={onClick} />;
  };

  const setUserConstant = () => {
    setUser(DEFAULT_USER);
  };

  const setObjectLiteral = () => {
    setUser({
      id: '2',
      name: 'Jane Doe',
      role: UserRole.CUSTOMER,
    });
  };

  return (
    <ChapterWrapper
      title="useState and new renders"
      subtitle="Hooks basics, useState"
      rerender={rerender}
    >
      <ColoredBlock style={{ marginBottom: 24 }}>
        I'm a render indicator. If I will change my background color - new render was triggered.
      </ColoredBlock>

      <Toolbar>{EMOJIS.map(mapToEmojiButton)}</Toolbar>
      <ValueLabel value={emoji} />

      <Toolbar>
        <Button text="Set user constant" onClick={setUserConstant} />
        <Button text="Set object literal" onClick={setObjectLiteral} />
      </Toolbar>
      <PropsTable title="User" data={user} />
    </ChapterWrapper>
  );
}
