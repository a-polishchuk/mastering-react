import { useToggle } from 'hooks/useToggle';
import { CSSProperties, ReactNode, useCallback, useState } from 'react';
import { BrowserRouter, PathRouteProps, Route, Routes } from 'react-router-dom';

import { EasterEgg } from './EasterEgg';
import { EmptyScreen } from './EmptyScreen';
import { ExpandCollapseButton } from './ExpandCollapseButton';
import classes from './MasterDetail.module.css';
import { MasterDetailContext, MasterDetailState } from './MasterDetailContext';

const COLLAPSED_WIDTH = '25px';

const buildMasterStyle = (expanded: boolean): CSSProperties => ({
  minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
  maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
  width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }): JSX.Element {
  const [routes, setRoutes] = useState<PathRouteProps[]>([]);
  const [expanded, toggleExpanded] = useToggle(true);
  const masterStyle = buildMasterStyle(expanded);

  const addRoute = useCallback((route: PathRouteProps) => {
    setRoutes((array) => [...array, route]);
  }, []);

  const value: MasterDetailState = {
    routes,
    addRoute,
  };

  return (
    <>
      <BrowserRouter>
        <div className={classes.container}>
          <div className={classes.master} style={masterStyle}>
            {expanded && (
              <MasterDetailContext.Provider value={value}>{children}</MasterDetailContext.Provider>
            )}
          </div>

          <main className={classes.detail}>
            <Routes>
              <Route path="/" element={<EmptyScreen />} />
              <Route path="*" element={<EmptyScreen />} />
              {routes.map((props) => (
                <Route key={props.path} {...props} />
              ))}
            </Routes>
          </main>

          <div className={classes.masterExpandContainer} style={masterStyle}>
            <div className={classes.masterExpandButton}>
              <ExpandCollapseButton expanded={expanded} onToggle={toggleExpanded} />
            </div>
          </div>
        </div>
      </BrowserRouter>
      <EasterEgg />
    </>
  );
}
