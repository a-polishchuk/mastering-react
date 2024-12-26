import { render, screen } from '@testing-library/react';
import { useState } from 'react';

import { useInterval } from '../useInterval';

function TestComponent() {
  const [count, setCount] = useState<number>(0);
  useInterval(() => setCount((value) => value + 1), 50);
  return <div>{`Count: ${count}`}</div>;
}

describe('useInterval', () => {
  test('should change counter over time', async () => {
    render(<TestComponent />);

    expect(await screen.findByText('Count: 1')).toBeVisible();
    expect(await screen.findByText('Count: 4')).toBeVisible();
  });
});
