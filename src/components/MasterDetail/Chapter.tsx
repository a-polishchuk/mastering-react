import { RouterPath } from 'config/RouterPath';
import { ReactNode, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Chapter.module.css';
import { useMasterDetailContext } from './MasterDetailContext';

export interface ChapterProps {
  title: string;
  element: ReactNode;
  path: RouterPath;
  emoji?: string;
}

export function Chapter({ emoji, title, path, element }: ChapterProps): JSX.Element {
  useRegisterRoute(path, element);

  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? classes.navLinkActive : classes.navLink)}
    >
      <div className={classes.chapter}>
        <div className={classes.emoji}>{emoji}</div>
        {title}
      </div>
    </NavLink>
  );
}

function useRegisterRoute(path: string, element: ReactNode) {
  const { addRoute } = useMasterDetailContext();

  useLayoutEffect(() => {
    addRoute({
      path,
      element,
    });
  }, [addRoute, element, path]);
}
