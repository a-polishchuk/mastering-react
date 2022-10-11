import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';

import { useRerender } from './useRerender';

function TestComponent(): JSX.Element {
  const rerender = useRerender();
  const rendersCountRef = useRef<number>(0);

  rendersCountRef.current++;

  return (
    <>
      <button onClick={rerender}>RERENDER</button>
      <div>{`Renders count: ${rendersCountRef.current}`}</div>
    </>
  );
}

describe('useRerender', () => {
  test('should trigger new render when called', async () => {
    render(<TestComponent />);

    expect(await screen.findByText('Renders count: 1'));

    await userEvent.click(screen.getByText('RERENDER'));

    expect(await screen.findByText('Renders count: 2'));
  });
});
