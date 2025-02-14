import { Button, ChapterWrapper, Toolbar } from 'components';
import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';

type MathFunction = (a: number, b: number) => number;
type Setter = Dispatch<SetStateAction<number>>;

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const buildOnChange = (setter: Setter): ChangeEventHandler<HTMLInputElement> => {
    return (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setter(value ? parseFloat(value) : 0);
    };
};

export function StoringFunctions() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [mathFunction, setMathFunction] = useState<MathFunction>(() => add);
    const [sign, setSign] = useState<string>('➕');

    const buildClickHandler = (fn: MathFunction, fnSign: string) => {
        return () => {
            setMathFunction(() => fn);
            setSign(fnSign);
        };
    };

    return (
        <ChapterWrapper title="Storing function in useState" subtitle="Hooks basics, useState">
            <Toolbar>
                <Button onClick={buildClickHandler(add, '➕')} text="➕ Add" />
                <Button onClick={buildClickHandler(subtract, '➖')} text="➖ Subtract" />
                <Button onClick={buildClickHandler(divide, '➗')} text="➗ Divide" />
                <Button onClick={buildClickHandler(multiply, '✖️')} text="✖️ Multiply" />
            </Toolbar>

            <Toolbar>
                <input type="number" value={a} onChange={buildOnChange(setA)} />
                <div style={{ minWidth: 10, textAlign: 'center' }}>{sign}</div>
                <input type="number" value={b} onChange={buildOnChange(setB)} />
                <span> = {mathFunction ? mathFunction(a, b) : ''}</span>
            </Toolbar>
        </ChapterWrapper>
    );
}
