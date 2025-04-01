import { About } from 'about/About';
import { LoadingSpinner } from 'components/LoadingSpinner/LoadingSpinner';
import { RouterPath } from 'config/RouterPath';
import { DEFAULT_TITLE } from 'hooks/useDocumentTitle';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, ReactNode, Suspense, useCallback, useState } from 'react';
import { BrowserRouter, NavLink, PathRouteProps, Route, Routes } from 'react-router-dom';
import { Background } from './Background';
import { ExpandToggle } from './ExpandToggle';
import classes from './MasterDetail.module.css';
import { MasterDetailContext } from './MasterDetailContext';
import { NotFound } from './NotFound';

const COLLAPSED_WIDTH = '44px';
const buildMasterStyle = (expanded: boolean): CSSProperties => ({
    minWidth: expanded ? '250px' : COLLAPSED_WIDTH,
    maxWidth: expanded ? '350px' : COLLAPSED_WIDTH,
    width: expanded ? '25%' : COLLAPSED_WIDTH,
});

export function MasterDetail({ children }: { children: ReactNode }) {
    const [routes, setRoutes] = useState<PathRouteProps[]>([]);
    const [expanded, toggleExpanded] = useToggle(true);

    const addRoute = useCallback((route: PathRouteProps) => {
        setRoutes((array) => {
            if (array.some((item) => item.path === route.path)) {
                return array;
            }
            return [...array, route];
        });
    }, []);

    return (
        <BrowserRouter basename="/mastering-react">
            <div className={classes.container}>
                <nav className={classes.master} style={buildMasterStyle(expanded)}>
                    <div className={classes.masterTitle}>
                        <ExpandToggle expanded={expanded} onClick={toggleExpanded} />
                        {expanded && (
                            <NavLink to={RouterPath.ROOT} className={classes.titleLink}>
                                <h2>{DEFAULT_TITLE}</h2>
                            </NavLink>
                        )}
                    </div>
                    {expanded && (
                        <div className={classes.tableOfContents}>
                            <MasterDetailContext.Provider value={{ addRoute }}>
                                {children}
                            </MasterDetailContext.Provider>
                        </div>
                    )}
                </nav>

                <main className={classes.detail}>
                    <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                            <Route path={RouterPath.ROOT} element={<Background />} />
                            <Route path={RouterPath.ABOUT} element={<About />} />
                            <Route path={RouterPath.PAGE_NOT_FOUND} element={<NotFound />} />
                            {routes.map((props) => (
                                <Route key={props.path} {...props} />
                            ))}
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </BrowserRouter>
    );
}
