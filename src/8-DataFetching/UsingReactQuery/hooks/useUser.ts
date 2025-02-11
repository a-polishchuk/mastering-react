import { User } from '8-DataFetching/types';
import { useUserId } from '8-DataFetching/UserContext';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../api/axiosInstance';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

export function useUser() {
    const { userId } = useUserId();
    const buildKey = QueryKeyFactory[Queries.USER_DETAILS];

    return useQuery<User>({
        queryKey: buildKey(userId),
        queryFn: async () => {
            const response = await axiosInstance.get(`users/${userId}`);
            return response.data;
        },
        placeholderData: keepPreviousData,
    });
}
