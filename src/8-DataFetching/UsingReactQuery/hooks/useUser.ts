import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchFunction } from '../api/fetchFunction';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUser() {
    const { userId } = useUserId();
    const buildKey = QueryKeyFactory[Queries.USER_DETAILS];

    return useQuery<User>({
        queryKey: buildKey(userId),
        queryFn: () => fetchFunction(`users/${userId}`),
        placeholderData: keepPreviousData,
    });
}
