import { useLoggedLifecycle } from 'components/LoggedLifecycle';

import { ItemData } from '../ItemData';

interface Props {
  item: ItemData;
  onClick: (item: ItemData) => void;
}

export function Item({ item, onClick }: Props): JSX.Element {
  const { name } = item;
  useLoggedLifecycle(name);

  return <li onClick={() => onClick(item)}>{name}</li>;
}
