import { useEffect } from 'react';
import { logTagged } from 'utils/logTagged';

export function useLoggedLifecycle(tag: string) {
    logTagged(tag, '🔄 Rendering');

    useEffect(() => {
        logTagged(tag, '✅ Mounted');

        return () => {
            logTagged(tag, '⛔️ Unmounting');
        };
    }, [tag]);
}
