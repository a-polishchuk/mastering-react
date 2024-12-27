import { useEffect, useRef } from 'react';
import { logTagged } from 'utils/logTagged';

export function useWhatCausedRender(tag: string, props: any) {
    const prevPropsRef = useRef<any>({});

    useEffect(() => {
        const changes = new Array<any>();
        const prevProps = prevPropsRef.current;
        const keySet = new Set([...Object.keys(prevProps), ...Object.keys(props)]);

        keySet.forEach((key) => {
            if (prevProps[key] !== props[key]) {
                changes.push({
                    key,
                    from: prevProps[key],
                    to: props[key],
                });
            }
        });

        logTagged(tag, 'rendered because of:');
        console.table(changes);

        prevPropsRef.current = props;
    });
}
