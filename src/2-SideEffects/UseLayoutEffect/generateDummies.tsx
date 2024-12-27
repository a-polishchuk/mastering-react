import { CSSProperties } from 'react';

function buildDotStyle(size: number): CSSProperties {
    return {
        position: 'absolute',
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#EEEEEE44',
        pointerEvents: 'none',
        zIndex: -1,
    };
}

export function generateDummies(count: number, size: number) {
    const array = [];

    for (let i = 0; i < count; i++) {
        array.push(<div key={i} style={buildDotStyle(size)} />);
    }

    return array;
}
