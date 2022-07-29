import { useCounter } from '1-HooksBasics/CustomHooks/useCounter';
import { Button } from 'components/Button/Button';
import { FlexFiller } from 'components/FlexFiller';
import { ReactElement, ReactNode } from 'react';

import classes from './ChapterWrapper.module.css';

export interface ChapterWrapperProps {
  title: string;
  subtitle?: string | ReactElement;
  rerender?: () => void;
  children: ReactNode;
}

export function ChapterWrapper(props: ChapterWrapperProps): JSX.Element {
  const { title, subtitle, rerender, children } = props;
  const { value: childrenKey, increase: remount } = useCounter();

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <FlexFiller />
          {rerender && <Button text="🔄 Rerender" onClick={rerender} />}
          <Button text="♻️ Remount" onClick={remount} />
        </div>
        <h3>{subtitle}</h3>
      </div>
      <div key={childrenKey} className={classes.content}>
        {children}
      </div>
    </>
  );
}
