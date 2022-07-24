import { useToggle } from 'hooks/useToggle';
import { Children, ReactNode, useEffect, useState } from 'react';

import classes from './Section.module.css';

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps): JSX.Element {
  const [expanded, toggleExpanded] = useToggle(false);

  // useEffect(() => {
  //   if (hasSelectedChild(title, children, selectedTitle)) {
  //     setExpanded(true);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const titleStyle = {
  //   fontWeight: expanded ? 600 : 400,
  // };

  return (
    <>
      <div className={classes.section} onClick={toggleExpanded}>
        <div style={{ fontSize: 24 }}>{expanded ? '➖' : '➕'}</div>
        <div>{title}</div>
      </div>
      <div className={classes.sectionContent} style={{ display: expanded ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
}

/**
 * Recusrsively checking if a tree node has selected node somewhere down the tree
 */
function hasSelectedChild(
  title: string,
  children: ReactNode,
  selectedTitle: string | null
): boolean {
  if (title === selectedTitle) {
    return true;
  }
  const array = Children.toArray(children);
  return array.some(({ props }: any) =>
    hasSelectedChild(props.title, props.children, selectedTitle)
  );
}
