import { Button } from 'components';
import { Toolbar } from 'components';
import { ValueLabel } from 'components';

type Props = {
    value: number;
    delta: number;
    increase?: () => void;
    decrease?: () => void;
};

export function Counter({ value, delta, increase, decrease }: Props) {
    return (
        <Toolbar>
            <ValueLabel value={value} minWidth="100px" />
            {increase && <Button onClick={increase} text={`+${delta}`} />}
            {decrease && <Button onClick={decrease} text={`-${delta}`} />}
        </Toolbar>
    );
}
