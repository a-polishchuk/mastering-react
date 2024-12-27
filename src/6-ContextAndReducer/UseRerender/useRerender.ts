import { useReducer } from 'react';

function createNewObject(): {} | null {
    return {};
}

export function useRerender() {
    const [, rerender] = useReducer(createNewObject, null);

    return rerender;
}
