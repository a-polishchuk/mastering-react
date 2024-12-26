import { PropsTable } from 'components';
import { useCurrentTheme } from '../Theme/ThemeContext';
import { UserAvatar } from './UserAvatar';
import { useUserContext } from './UserContext';

export function UserProfile() {
  const user = useUserContext();
  const { primaryColor } = useCurrentTheme();

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <UserAvatar />
      <div style={{ color: primaryColor }}>
        <PropsTable title="User Profile" data={user} />
      </div>
    </div>
  );
}
