import { useEffect, useState } from 'react';

export function useHistory<T>(value: T): T[] {
  const [history, setHistory] = useState<T[]>([]);

  useEffect(() => {
    setHistory((array) => [...array, value]);
  }, [value]);

  return history;
}
