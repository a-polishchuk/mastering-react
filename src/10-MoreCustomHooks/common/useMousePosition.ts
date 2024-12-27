import { MouseEventHandler, useState } from 'react';
import { Position } from 'utils/geometry';

export type UseMousePosition = [Position | null, MouseEventHandler<HTMLElement>];

export function useMousePosition(): UseMousePosition {
    const [mousePosition, setMousePosition] = useState<Position | null>(null);

    const eventHandler: MouseEventHandler<HTMLElement> = (event) => {
        const { clientX, clientY } = event;
        const target = event.target as HTMLElement;
        const { x, y } = target.getBoundingClientRect();
        setMousePosition({
            x: clientX - x,
            y: clientY - y,
        });
    };

    return [mousePosition, eventHandler];
}
