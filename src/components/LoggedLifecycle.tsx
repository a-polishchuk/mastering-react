import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { ReactNode } from 'react';

type Props = {
    tag: string;
    children: ReactNode;
};

export function LoggedLifecycle({ tag, children }: Props) {
    useLoggedLifecycle(tag);

    return <>{children}</>;
}
