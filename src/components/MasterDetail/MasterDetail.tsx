import { useToggle } from 'hooks/useToggle';
import { CSSProperties, ReactNode, useCallback, useState } from 'react';
import { BrowserRouter, PathRouteProps, Route, Routes } from 'react-router-dom';

import { EasterEgg } from './EasterEgg';
import { EmptyScreen } from './EmptyScreen';
import { ExpandToggle } from './ExpandToggle';
import classes from './MasterDetail.module.css';
import { MasterDetailContext, MasterDetailState } from './MasterDetailContext';

const COLLAPSED_WIDTH = '16px';

const buildMasterStyle = (expanded: boolean): CSSProperties => ({
  minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
  maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
  width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }): JSX.Element {
  const [routes, setRoutes] = useState<PathRouteProps[]>([]);
  const addRoute = useCallback((route: PathRouteProps) => {
    setRoutes((array) => [...array, route]);
  }, []);
  const value: MasterDetailState = {
    routes,
    addRoute,
  };

  const [expanded, toggleExpanded] = useToggle(true);
  const masterStyle = buildMasterStyle(expanded);

  return (
    <>
      <BrowserRouter>
        <div className={classes.container}>
          <nav className={classes.master} style={masterStyle}>
            {expanded && (
              <MasterDetailContext.Provider value={value}>{children}</MasterDetailContext.Provider>
            )}
            <div className={classes.expandCollapseButton}>
              <ExpandToggle expanded={expanded} onClick={toggleExpanded} />
            </div>
          </nav>

          <main className={classes.detail}>
            <Routes>
              <Route path="/" element={<EmptyScreen />} />
              <Route path="*" element={<EmptyScreen />} />
              {routes.map((props) => (
                <Route key={props.path} {...props} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
      <EasterEgg />
    </>
  );
}
