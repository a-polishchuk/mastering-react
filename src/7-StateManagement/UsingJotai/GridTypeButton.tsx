import { Button } from 'components';
import { Dispatch, SetStateAction } from 'react';
import { GridType } from './GridType';

type Props = {
    text: string;
    gridType: GridType;
    state: UseState<GridType>;
};

type UseState<T> = [T, Dispatch<SetStateAction<T>>];

export function GridTypeButton({ text, gridType, state }: Props) {
    const [currentGridType, setGridType] = state;

    return (
        <Button
            text={text}
            onClick={() => setGridType(gridType)}
            disabled={gridType === currentGridType}
        />
    );
}
