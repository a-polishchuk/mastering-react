import { Children, ReactNode } from 'react';
import classes from './ColorNode.module.css';
import { useColorContext } from './ColorProvider';

export function ColorNode({ children }: { children?: ReactNode }) {
    const backgroundColor = useColorContext();

    return (
        <div className={classes.node} style={{ backgroundColor }}>
            {Children.toArray(children)?.map((_child, index, array) => {
                const gap = 100 / array.length;
                const left = gap * index + gap / 2;
                return <div key={index} className={classes.line} style={{ left: `${left}%` }} />;
            })}
            {children && <div className={classes.children}>{children}</div>}
        </div>
    );
}
