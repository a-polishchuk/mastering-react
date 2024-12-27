import useSWR from 'swr';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

const SWR_CONFIG = {
    refreshInterval: 3000,
};

function fetchLastUpdated(): Promise<Date> {
    return new Promise((resolve) => {
        resolve(new Date());
    });
}

export function useLastUpdated() {
    const keyBuilder = QueryKeyFactory[Queries.LAST_UPDATED];

    return useSWR<Date>(keyBuilder(), fetchLastUpdated, SWR_CONFIG);
}
