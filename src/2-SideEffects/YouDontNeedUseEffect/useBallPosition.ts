import { useEffect, useState } from 'react';
import { generateRandomNumber } from 'utils/generateRandomNumber';

type LeftTop = [number, number];

const INITIAL_VALUE: LeftTop = [0, 0];

export function useBallPosition(minStep: number, maxStep: number): LeftTop {
    const [leftTop, setLeftTop] = useState<LeftTop>(INITIAL_VALUE);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const step = generateRandomNumber(minStep, maxStep);
            switch (event.key) {
                case 'ArrowLeft':
                    setLeftTop(([left, top]) => [Math.max(left - step, 0), top]);
                    break;
                case 'ArrowRight':
                    setLeftTop(([left, top]) => [left + step, top]);
                    break;
                case 'ArrowUp':
                    setLeftTop(([left, top]) => [left, Math.max(top - step, 0)]);
                    break;
                case 'ArrowDown':
                    setLeftTop(([left, top]) => [left, top + step]);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [minStep, maxStep]);

    return leftTop;
}
