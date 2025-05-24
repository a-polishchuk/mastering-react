import { useRef } from 'react';
import './RenderIndicator.css';

export function RenderIndicator() {
    const iconKey = useRef(0);

    iconKey.current++;

    return <RenderIcon key={iconKey.current} />;
}

function RenderIcon() {
    return <span className="renderIcon">🔄</span>;
}
