import { PostComment } from '8-DataFetching/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosInstance } from '../api/axiosInstance';
import { QueryKeyFactory, Queries } from '../api/QueryKeyFactory';

const LIMIT = 5;

export function useComments() {
    const buildKey = QueryKeyFactory[Queries.COMMENTS];

    return useInfiniteQuery({
        queryKey: buildKey(),
        queryFn: ({ pageParam = 0 }) => fetchComments(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
}

export type CommentsPage = {
    data: PostComment[];
    nextPage: number | null;
};

async function fetchComments(page: number): Promise<CommentsPage> {
    const params = new URLSearchParams({
        _start: (page * LIMIT).toString(),
        _limit: LIMIT.toString(),
    });

    const response = await axiosInstance.get(`comments?${params}`);

    return {
        data: response.data,
        nextPage: response.data.length === LIMIT ? page + 1 : null,
    };
}
