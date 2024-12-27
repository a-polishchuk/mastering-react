import { HandShape } from './HandShape';

export function HandShapeEmoji({ value }: { value: HandShape }) {
    return <span style={{ fontSize: 64 }}>{value}</span>;
}
