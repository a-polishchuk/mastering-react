import { ComponentProps } from 'react';

export function OutsideLink({ children, ...rest }: ComponentProps<'a'>) {
    return (
        <a target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </a>
    );
}
