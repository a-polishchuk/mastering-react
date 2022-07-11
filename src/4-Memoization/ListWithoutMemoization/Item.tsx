import { ItemData } from '../ItemData';

interface Props {
  item: ItemData;
  onClick: (item: ItemData) => void;
}

export function Item({ item, onClick }: Props): JSX.Element {
  const { name } = item;
  console.log(`> render ${name}`);

  return <li onClick={() => onClick(item)}>{name}</li>;
}
