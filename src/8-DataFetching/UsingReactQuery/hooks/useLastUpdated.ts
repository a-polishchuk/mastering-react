import { useQuery } from '@tanstack/react-query';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

// function fetchLastUpdated(): Promise<Date> {
//   return new Promise((resolve) => {
//     resolve(new Date());
//   });
// }

async function fetchLastUpdated() {
    return new Date();
}

export function useLastUpdated() {
    const keyBuilder = QueryKeyFactory[Queries.LAST_UPDATED];

    return useQuery({
        queryKey: keyBuilder(),
        queryFn: fetchLastUpdated,
        refetchInterval: 3000,
    });
}
