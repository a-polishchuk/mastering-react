import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { ReactElement, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmojiButton } from '../EmojiButton/EmojiButton';
import { FlexFiller } from '../FlexFiller';
import classes from './ChapterWrapper.module.css';

export interface ChapterWrapperProps {
  title: string | ReactElement;
  subtitle?: string | ReactElement;
  rerender?: () => void;
  children: ReactNode;
}

export function ChapterWrapper(props: ChapterWrapperProps): JSX.Element {
  const { title, subtitle, rerender, children } = props;
  const { value: childrenKey, increase: remount } = useCounter();

  const navigate = useNavigate();
  const closeChapter = () => navigate('/');

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <FlexFiller />
          {rerender && <EmojiButton emoji="🔄" tooltip="RErender" onClick={rerender} />}
          <EmojiButton emoji="♻️" tooltip="REmount" onClick={remount} />
          <EmojiButton emoji="❌" tooltip="Close" onClick={closeChapter} />
        </div>
        <h3>{subtitle}</h3>
      </div>
      <div key={childrenKey} className={classes.content}>
        {children}
      </div>
    </div>
  );
}
