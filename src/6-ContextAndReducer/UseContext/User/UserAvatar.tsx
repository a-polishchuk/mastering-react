import { CSSProperties } from 'react';

import { useCurrentTheme } from '../Theme/ThemeContext';
import { useUserContext } from './UserContext';

export function UserAvatar(): JSX.Element {
  const user = useUserContext();
  const username = user?.username;
  const { primaryColor, secondaryColor } = useCurrentTheme();
  const avatarUrl = `https://cataas.com/cat?${username}`;

  const style: CSSProperties = {
    width: 128,
    height: 128,
    objectFit: 'cover',
    border: `1px solid ${primaryColor}`,
    boxShadow: `3px 3px 0px 0px ${secondaryColor}`,
  };

  return <img src={avatarUrl} alt="User avatar" style={style} />;
}
