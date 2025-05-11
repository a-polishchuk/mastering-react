import { Breed } from '9-Routing/DynamicRoutes/Breed';
import { BreedsList } from '9-Routing/DynamicRoutes/BreedsList';
import { About } from 'about/About';
import { LoadingSpinner } from 'components';
import { BASE_PATH, RouterPath } from 'config/RouterPath';
import { DEFAULT_TITLE } from 'hooks/useDocumentTitle';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties, lazy, ReactNode, Suspense, useCallback, useState } from 'react';
import { BrowserRouter, NavLink, PathRouteProps, Route, Routes } from 'react-router';
import { ExpandToggle } from './ExpandToggle';
import classes from './MasterDetail.module.css';
import { MasterDetailContext } from './MasterDetailContext';
import { NotFound } from './NotFound';

const DynamicRoutes = lazy(() => import('9-Routing/DynamicRoutes'));
const Background = lazy(() => import('./Background'));

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
        <BrowserRouter basename={BASE_PATH}>
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

                            <Route path={RouterPath.DYNAMIC_ROUTES} element={<DynamicRoutes />}>
                                <Route path="breeds" element={<BreedsList />}>
                                    <Route path=":breedId" element={<Breed />} />
                                </Route>
                            </Route>

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
