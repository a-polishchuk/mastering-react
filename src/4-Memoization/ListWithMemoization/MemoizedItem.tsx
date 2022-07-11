import { useLoggedLifecycle } from 'components/LoggedLifecycle';
import { memo } from 'react';

import { ItemData } from '../ItemData';

interface Props {
  data: ItemData;
  onClick: (item: ItemData) => void;
}

function Item({ data, onClick }: Props): JSX.Element {
  const { name } = data;
  useLoggedLifecycle(name);

  return <li onClick={() => onClick(data)}>{name}</li>;
}

export const MemoizedItem = memo(Item);
