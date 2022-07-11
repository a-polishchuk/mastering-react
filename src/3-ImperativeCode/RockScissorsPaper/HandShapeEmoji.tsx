import { HandShape } from './HandShape';

export function HandShapeEmoji({ value }: { value: HandShape }): JSX.Element {
  return <span style={{ fontSize: 64 }}>{value}</span>;
}
