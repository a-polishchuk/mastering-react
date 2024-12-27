import { DivGrid } from '7-StateManagement/components/DivGrid';
import { useGridStore } from './useGridStore';

const CELL_SIZE = 15;

export function GridController() {
    const grid = useGridStore((state) => state.grid);
    const toggleCell = useGridStore((state) => state.toggleCell);

    return <DivGrid grid={grid} cellSize={CELL_SIZE} toggleCell={toggleCell} />;
}
