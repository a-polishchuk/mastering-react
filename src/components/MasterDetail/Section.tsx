import { Children, CSSProperties, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ExpandToggle } from './ExpandToggle';
import classes from './Section.module.css';

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { pathname } = useLocation();

  const toggleExpanded = () => setExpanded((value) => !value);

  useEffect(() => {
    const selectedPath = pathname.substring(1);
    if (selectedPath && hasSelectedChild('', selectedPath, children)) {
      setExpanded(true);
    }
  }, [children, pathname]);

  const contentStyle: CSSProperties = {
    display: expanded ? 'block' : 'none',
  };

  return (
    <>
      <div className={classes.section} onClick={toggleExpanded}>
        <ExpandToggle expanded={expanded} />
        <div>{title}</div>
      </div>
      <div className={classes.sectionContent} style={contentStyle}>
        {children}
      </div>
    </>
  );
}

/**
 * Recusrsively checking if a tree node has selected node somewhere down the tree
 */
function hasSelectedChild(path: string, selectedPath: string, children: ReactNode): boolean {
  if (path === selectedPath) {
    return true;
  }
  return Children.toArray(children).some(({ props }: any) =>
    hasSelectedChild(props.path, selectedPath, props.children)
  );
}
