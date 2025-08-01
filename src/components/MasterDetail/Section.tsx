import { Children, CSSProperties, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { cn } from 'utils/cn';
import { ExpandToggle } from './ExpandToggle';
import classes from './Section.module.css';

export type SectionProps = {
    title: string;
    children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const { pathname } = useLocation();

    const toggleExpanded = () => setExpanded((value) => !value);

    useEffect(() => {
        const selectedPath = pathname.substring(1);
        if (selectedPath && hasSelectedChild('', selectedPath, children)) {
            setExpanded(true);
        }
    }, [children, pathname]);

    const contentStyle: CSSProperties = {
        display: expanded ? 'block' : 'none',
    };

    return (
        <div className={classes.section}>
            <div
                className={cn(classes.sectionTitle, expanded && classes.expanded)}
                onClick={toggleExpanded}
            >
                <ExpandToggle expanded={expanded} />
                <div>{title}</div>
            </div>
            <div className={classes.sectionContent} style={contentStyle}>
                {children}
            </div>
        </div>
    );
}

/**
 * Recusrsively checking if a tree node has selected node somewhere down the tree
 */
function hasSelectedChild(path: string, selectedPath: string, children: ReactNode): boolean {
    if (path === selectedPath) {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Children.toArray(children).some(({ props }: any) =>
        hasSelectedChild(props.path, selectedPath, props.children),
    );
}
