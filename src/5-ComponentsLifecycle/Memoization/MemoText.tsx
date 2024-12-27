import { useLoggedLifecycle } from 'hooks/useLoggedLifecycle';
import { memo } from 'react';

type Props = {
    tag: string;
    text: string;
};

export const MemoText = memo(({ tag, text }: Props) => {
    useLoggedLifecycle(tag);

    return <div>{text}</div>;
});
