import { Button } from 'components/Button';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';

interface Props {
  value: number;
  delta: number;
  increase?: () => void;
  decrease?: () => void;
}

export function Counter({ value, delta, increase, decrease }: Props): JSX.Element {
  return (
    <Toolbar>
      <ValueLabel value={value} minWidth="100px" />
      {increase && <Button onClick={increase} text={`+${delta}`} />}
      {decrease && <Button onClick={decrease} text={`-${delta}`} />}
    </Toolbar>
  );
}
