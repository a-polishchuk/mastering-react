import { useEffect } from 'react';

export const DEFAULT_TITLE = 'Опановуємо React';

export function useDocumentTitle(title: string | null | undefined) {
    useEffect(() => {
        document.title = title || DEFAULT_TITLE;
    }, [title]);
}
