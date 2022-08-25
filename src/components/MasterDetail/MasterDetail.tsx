import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { RouterPath } from 'config/RouterPath';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, ReactNode, Suspense, useCallback, useState } from 'react';
import { BrowserRouter, NavLink, PathRouteProps, Route, Routes } from 'react-router-dom';

import { EasterEgg } from './EasterEgg';
import { EmptyScreen } from './EmptyScreen';
import { ExpandToggle } from './ExpandToggle';
import classes from './MasterDetail.module.css';
import { MasterDetailContext, MasterDetailState } from './MasterDetailContext';

const COLLAPSED_WIDTH = '44px';

const buildMasterStyle = (expanded: boolean): CSSProperties => ({
  minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
  maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
  width: expanded ? '25%' : COLLAPSED_WIDTH,
});

function useContextValue(): MasterDetailState {
  const [routes, setRoutes] = useState<PathRouteProps[]>([]);

  const addRoute = useCallback((route: PathRouteProps) => {
    setRoutes((array) => {
      if (array.some((item) => item.path === route.path)) {
        return array;
      }
      return [...array, route];
    });
  }, []);

  return {
    routes,
    addRoute,
  };
}

export function MasterDetail({ children }: { children: ReactNode }): JSX.Element {
  const contextValue = useContextValue();
  const [expanded, toggleExpanded] = useToggle(true);
  const masterStyle = buildMasterStyle(expanded);

  return (
    <BrowserRouter basename="/mastering-react">
      <div className={classes.container}>
        <nav className={classes.master} style={masterStyle}>
          <div className={classes.masterTitle}>
            <ExpandToggle expanded={expanded} onClick={toggleExpanded} />
            {expanded && (
              <NavLink to={RouterPath.ROOT} className={classes.titleLink}>
                <h2>Mastering React</h2>
              </NavLink>
            )}
          </div>
          {expanded && (
            <div className={classes.tableOfContents}>
              <MasterDetailContext.Provider value={contextValue}>
                {children}
              </MasterDetailContext.Provider>
            </div>
          )}
        </nav>

        <main className={classes.detail}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path={RouterPath.ROOT} element={<EmptyScreen />} />
              <Route path={RouterPath.PAGE_NOT_FOUND} element={<EmptyScreen />} />
              {contextValue.routes.map((props) => (
                <Route key={props.path} {...props} />
              ))}
            </Routes>
          </Suspense>
        </main>
      </div>
      <EasterEgg />
    </BrowserRouter>
  );
}
