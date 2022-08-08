import { useUserId } from '8-DataFetching/UserContext';
import { Button } from 'components';
import { useSWRConfig } from 'swr';

import { RequestKey } from '../api/RequestKey';

export function RefreshAll(): JSX.Element {
  const userId = useUserId();
  const { mutate } = useSWRConfig();

  const handleClick = () => {
    mutate(RequestKey.user(userId));
    mutate(RequestKey.todos(userId));
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
