import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { useRerender } from 'hooks/useRerender';

import { ItemData } from '../ItemData';
import { List } from './List';

const ITEMS: ItemData[] = [
  { id: '1', name: 'First' },
  { id: '2', name: 'Second' },
  { id: '3', name: 'Third' },
];

export function ListWithoutMemoization() {
  const rerender = useRerender();

  return (
    <>
      <ChapterHeader title="useCallback" subtitle="List without memoization" />

      <Toolbar>
        <Button text="Click me to re-render" onClick={rerender} />
      </Toolbar>

      <List items={ITEMS} />
    </>
  );
}
