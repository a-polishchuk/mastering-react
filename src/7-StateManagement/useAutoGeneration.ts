import { useInterval } from 'hooks/useInterval';
import { useToggle } from 'hooks/useToggle';
import { DispatchWithoutAction } from 'react';

export function useAutoGeneration(
    delay: number,
    nextGeneration: () => void,
): [boolean, DispatchWithoutAction] {
    const toggle = useToggle(false);
    const [isAutoGenerating] = toggle;
    const delayOrNull = isAutoGenerating ? delay : null;

    useInterval(nextGeneration, delayOrNull);

    return toggle;
}
