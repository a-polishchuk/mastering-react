import { useEffect, useState } from 'react';

/**
 * Fetch data from a URL and return the data, loading state, and error.
 * NOTE: this version support only GET requests.
 */
export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        let isEffectActive = true;
        setIsLoading(true);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status code ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                if (isEffectActive) {
                    setData(json);
                    setError(null);
                }
            })
            .catch((err: unknown) => {
                if (isEffectActive) {
                    setData(null);
                    setError(err);
                }
            })
            .finally(() => {
                if (isEffectActive) {
                    setIsLoading(false);
                }
            });

        return () => {
            isEffectActive = false;
        };
    }, [url]);

    return { data, isLoading, error };
}
