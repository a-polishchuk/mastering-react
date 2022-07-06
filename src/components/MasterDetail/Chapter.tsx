import classnames from 'classnames';
import { ChapterComponent } from 'types/ChapterComponent';

import classes from './Chapter.module.css';
import { useMasterDetailContext } from './MasterDetailContext';

export interface ChapterProps {
  title: string;
  component: ChapterComponent;
}

export function Chapter({ title, component }: ChapterProps): JSX.Element {
  const { selectedTitle, selectChapter } = useMasterDetailContext();
  const isSelected = selectedTitle === title;
  const className = classnames(classes.chapter, isSelected && classes.chapterSelected);

  const handleClick = () => {
    if (isSelected) {
      selectChapter(null, null);
    } else {
      selectChapter(title, component);
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}
