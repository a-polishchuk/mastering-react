import { memo } from 'react';
import { ItemData } from '../ItemData';

interface Props {
  data: ItemData;
  onClick: (item: ItemData) => void;
}

function Item({ data, onClick }: Props): JSX.Element {
  const { name } = data;
  console.log(`> render ${name}`);

  return <li onClick={() => onClick(data)}>{name}</li>;
}

// TODO: use logged lifecycle component here
export const MemoizedItem = memo(Item);
