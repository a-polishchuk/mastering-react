import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button, ChapterWrapper, Toolbar, ValueLabel } from 'components';
import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { useCallback, useEffect } from 'react';
import { logTagged } from 'utils/logTagged';
import { useUpdateEffect } from './useUpdateEffect';

export function UseUpdateEffect() {
    const { value, increase } = useCounter();

    useLoggedLifecycle('Parent');

    useEffect(() => {
        logTagged('useEffect', 'effect with empty deps list');
    }, []);

    useUpdateEffect(
        useCallback(() => {
            logTagged('updateEffect', `value === ${value}`);
        }, [value]),
    );

    return (
        <ChapterWrapper title="useCallback" subtitle="useUpdateEffect">
            <Toolbar>
                <ValueLabel value={value} minWidth="100px" />
                <Button text="+1" onClick={increase} />
            </Toolbar>
        </ChapterWrapper>
    );
}
