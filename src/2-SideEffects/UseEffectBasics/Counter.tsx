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
      <div style={{ marginLeft: 20, minWidth: 100 }}>
        <ValueLabel value={value} />
      </div>
      {increase && <Button onClick={increase} text={`+${delta}`} />}
      {decrease && <Button onClick={decrease} text={`-${delta}`} />}
    </Toolbar>
  );
}
