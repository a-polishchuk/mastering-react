import { HandShape } from './HandShape';
import { HandShapeSelectable } from './HandShapeSelectable';

type Props = {
    currentValue: HandShape;
    onChange: (newValue: HandShape) => void;
};

const HAND_SHAPES: HandShape[] = ['✊', '✌️', '✋'];

export function RockScissorsPaperInput({ currentValue, onChange }: Props) {
    return (
        <>
            {HAND_SHAPES.map((handShape) => (
                <HandShapeSelectable
                    key={handShape}
                    value={handShape}
                    isSelected={handShape === currentValue}
                    onClick={() => onChange(handShape)}
                />
            ))}
        </>
    );
}
