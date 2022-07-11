import { ChapterHeader } from 'components/ChapterHeader';

import { generateItems, Item } from './Item';
import classes from './KeysAndLists.module.css';
import { List } from './List';

export function KeysAndLists(): JSX.Element {
  const generateInitialItems = () => generateItems(10);

  const getIndexKey = (item: Item, index: number) => index;
  const getIdKey = (item: Item, index: number) => item.id;

  return (
    <>
      <ChapterHeader title="Key property" subtitle="Keys & lists" />
      <div className={classes.twoColumns}>
        <i className={classes.columnTitle}>key === index</i>
        <i className={classes.columnTitle}>key === uniqueId</i>
      </div>
      <div className={classes.twoColumns}>
        <List generateItems={generateInitialItems} getKey={getIndexKey} />
        <List generateItems={generateInitialItems} getKey={getIdKey} />
      </div>
    </>
  );
}
