import { RouterPath } from 'config/RouterPath';
import { ReactNode, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Chapter.module.css';
import { useMasterDetailContext } from './MasterDetailContext';

export type ChapterProps = {
    title: string;
    element: ReactNode;
    path: RouterPath;
    emoji?: string;
};

export function Chapter({ emoji, title, path, element }: ChapterProps) {
    const { addRoute } = useMasterDetailContext();
    const to = path.endsWith('/*') ? path.slice(0, -2) : path;

    useEffect(() => {
        addRoute({
            path,
            element,
        });
    }, [addRoute, element, path]);

    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return isActive ? classes.navLinkActive : classes.navLink;
            }}
        >
            <div className={classes.chapter}>
                <div className={classes.emoji}>{emoji}</div>
                {title}
            </div>
        </NavLink>
    );
}
