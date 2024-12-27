import { Button, Toolbar } from 'components';

type Props = {
    isAutoGenerating: boolean;
    toggleAutoGeneration: () => void;
    nextGeneration: () => void;
    randomize: () => void;
    clear: () => void;
};

export function GridToolbar(props: Props) {
    const { isAutoGenerating, toggleAutoGeneration, nextGeneration, randomize, clear } = props;

    return (
        <Toolbar>
            <Button
                text={isAutoGenerating ? 'Stop Generating' : 'Start Generating'}
                onClick={toggleAutoGeneration}
            />
            <Button text="Next Gen" onClick={nextGeneration} disabled={isAutoGenerating} />
            <Button text="Randomize" onClick={randomize} disabled={isAutoGenerating} />
            <Button text="Clear" onClick={clear} disabled={isAutoGenerating} />
        </Toolbar>
    );
}
