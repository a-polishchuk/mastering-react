import { useUserId } from '8-DataFetching/UserContext';
import { Button } from 'components';
import { useSWRConfig } from 'swr';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

export function RefreshAll() {
  const userId = useUserId();
  const { mutate: refetch } = useSWRConfig();

  const handleClick = () => {
    refetch(QueryKeyFactory[Queries.USER_DETAILS](userId));
    refetch(QueryKeyFactory[Queries.TODO_LIST](userId));
  };

  return <Button text="Refresh all" onClick={handleClick} />;
}
