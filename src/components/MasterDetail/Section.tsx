import { Children, ReactNode, useEffect, useState } from 'react';

import { ExpandCollapseButton } from './ExpandCollapseButton';
import { useMasterDetailContext } from './MasterDetailContext';
import classes from './Section.module.css';

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const { selectedTitle } = useMasterDetailContext();

  useEffect(() => {
    if (hasSelectedChild(title, children, selectedTitle)) {
      setExpanded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleExpanded = () => {
    setExpanded((value) => !value);
  };

  const titleStyle = {
    fontWeight: expanded ? 600 : 400,
  };

  return (
    <>
      <div className={classes.section} onClick={toggleExpanded}>
        <div className={classes.sectionButton}>
          <ExpandCollapseButton expanded={expanded} />
        </div>
        <div style={titleStyle}>{title}</div>
      </div>
      {expanded && <div className={classes.sectionContent}>{children}</div>}
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
