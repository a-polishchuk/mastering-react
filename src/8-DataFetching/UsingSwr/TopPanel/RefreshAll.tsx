import { useUserId } from '8-DataFetching/UserContext';
import { Button } from 'components';
import { useSWRConfig } from 'swr';

export function RefreshAll(): JSX.Element {
  const userId = useUserId();
  const { mutate } = useSWRConfig();

  const handleClick = () => {
    mutate(`users/${userId}`);
    mutate(`todos?userId=${userId}`);
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
