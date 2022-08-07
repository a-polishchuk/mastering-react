import { useQuery, QueryFunctionContext, UseQueryResult } from '@tanstack/react-query';

const OPTIONS = {
  refetchInterval: 3000,
};

function fetchLastUpdated(context: QueryFunctionContext<string[]>): Promise<Date> {
  return new Promise((resolve) => {
    resolve(new Date());
  });
}

export function useLastUpdated(): UseQueryResult<Date> {
  return useQuery(['lastUpdated'], fetchLastUpdated, OPTIONS);
}
