import { User } from '8-DataFetching/types';
import { useQuery } from '@tanstack/react-query';
import { fetchFunction } from '../api/fetchFunction';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUsers() {
    const buildKey = QueryKeyFactory[Queries.USERS];

    return useQuery<User[]>({
        queryKey: buildKey(),
        queryFn: async () => fetchFunction('users'),
    });
}
