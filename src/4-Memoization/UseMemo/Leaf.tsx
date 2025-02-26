import { ColoredBlock } from 'components';
import { CSSProperties, MouseEventHandler } from 'react';
import { nodeStyle } from './nodeStyle';

type Props = {
    path: string[];
    onClick: MouseEventHandler<HTMLDivElement>;
};

export function Leaf({ path, onClick }: Props) {
    const leafStyle: CSSProperties = {
        ...nodeStyle,
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <ColoredBlock style={leafStyle} onClick={onClick}>
            {path.join(', ')}
        </ColoredBlock>
    );
}
