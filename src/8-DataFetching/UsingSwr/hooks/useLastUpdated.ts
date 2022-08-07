import useSWR from 'swr';

const SWR_CONFIG = {
  refreshInterval: 3000,
};

function fetchLastUpdated(): Promise<Date> {
  return new Promise((resolve) => {
    resolve(new Date());
  });
}

export function useLastUpdated() {
  return useSWR<Date>('lastUpdated', fetchLastUpdated, SWR_CONFIG);
}
