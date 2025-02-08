import { useQuery } from '@tanstack/react-query';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

export function useLastUpdated() {
    const buildKey = QueryKeyFactory[Queries.LAST_UPDATED];

    return useQuery({
        queryKey: buildKey(),
        queryFn: fetchLastUpdated,
        refetchInterval: 3000,
    });
}

function fetchLastUpdated() {
    return new Date();
}

// function fetchWithDelay() {
//     return new Promise<Date>((resolve) => {
//         setTimeout(() => {
//             resolve(new Date());
//         }, 500);
//     });
// }
