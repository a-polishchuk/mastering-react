import { generateItems, Item } from './Item';
import { List } from './List';

export function KeysToReact(): JSX.Element {
  const generateInitialItems = () => generateItems(10);
  const getIndexKey = (item: Item, index: number) => index;
  const getIdKey = (item: Item, index: number) => item.id;

  return (
    <>
      <h2>Keys to React</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        <h3 style={{ flex: 1 }}>key === index</h3>
        <h3 style={{ flex: 1 }}>key === uniqueId</h3>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <List generateItems={generateInitialItems} getKey={getIndexKey} />
        <List generateItems={generateInitialItems} getKey={getIdKey} />
      </div>
    </>
  );
}
