import { ChapterWrapper, TextBlock } from 'components';

import { generateItems, Item } from './Item';
import classes from './KeysAndLists.module.css';
import { List } from './List';

export function KeysAndLists(): JSX.Element {
  const generateInitialItems = () => generateItems(10);

  const getIndexKey = (item: Item, index: number) => index;
  const getIdKey = (item: Item, index: number) => item.id;

  return (
    <ChapterWrapper title="Keys & lists" subtitle="Key property">
      <TextBlock>
        <div>
          ❗️ DO NOT use <code>index</code> property as React <code>key</code> if the order of items
          will be changed.
        </div>
        <div>🚮 Click on the list item to remove it. Note how many items were re-rendered.</div>
      </TextBlock>

      <div className={classes.twoColumns}>
        <code className={classes.columnTitle}>key === index</code>
        <code className={classes.columnTitle}>key === uniqueId</code>
      </div>

      <div className={classes.twoColumns}>
        <List generateItems={generateInitialItems} getKey={getIndexKey} />
        <List generateItems={generateInitialItems} getKey={getIdKey} />
      </div>
    </ChapterWrapper>
  );
}
