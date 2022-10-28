import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Queries, QueryKeyFactory } from '../api/QueryKeyFactory';

const OPTIONS = {
  refetchInterval: 3000,
};

function fetchLastUpdated(): Promise<Date> {
  return new Promise((resolve) => {
    resolve(new Date());
  });
}

export function useLastUpdated(): UseQueryResult<Date> {
  const keyBuilder = QueryKeyFactory[Queries.LAST_UPDATED];

  return useQuery(keyBuilder(), fetchLastUpdated, OPTIONS);
}
