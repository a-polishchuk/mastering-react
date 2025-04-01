import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { cn } from 'utils/cn';
import classes from './StyledLink.module.css';

export type LinkProps = Pick<NavLinkProps, 'to'> & {
    children: ReactNode;
};

export function StyledLink({ children, ...rest }: LinkProps) {
    return (
        <NavLink
            className={({ isActive }) => cn(classes.link, isActive && classes.activeLink)}
            {...rest}
        >
            [{children}]
        </NavLink>
    );
}
