import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import useSWR, { SWRResponse } from 'swr';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

export function useUser(): SWRResponse<User> {
    const { userId } = useUserId();
    const keyBuilder = QueryKeyFactory[Queries.USER_DETAILS];

    return useSWR<User>(keyBuilder(userId));
}
