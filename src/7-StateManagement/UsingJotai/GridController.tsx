import { CheckboxGrid } from '7-StateManagement/components/CheckboxGrid';
import { DivGrid } from '7-StateManagement/components/DivGrid';
import { toggleCell } from '7-StateManagement/model/toggleCell';
import { useAtom } from 'jotai';
import { gridAtom } from './gridAtom';
import { GridType } from './GridType';

type Props = {
    gridType: GridType;
    cellSize: number;
};

export function GridController({ gridType, cellSize }: Props) {
    const [grid, setGrid] = useAtom(gridAtom);

    const toggle = (row: number, col: number) => {
        setGrid((currValue) => toggleCell(currValue, [row, col]));
    };

    switch (gridType) {
        case GridType.CHECKBOX:
            return <CheckboxGrid grid={grid} cellSize={cellSize} toggleCell={toggle} />;
        case GridType.DIV:
            return <DivGrid grid={grid} cellSize={cellSize} toggleCell={toggle} />;
        default:
            throw new Error(`Unsupported grid type: ${gridType}`);
    }
}
