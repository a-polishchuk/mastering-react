import { useCallback, useState } from 'react';
import { PathRouteProps } from 'react-router-dom';
import { MasterDetailState } from './MasterDetailContext';

export function useContextValue(): MasterDetailState {
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
