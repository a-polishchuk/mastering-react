import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { useLocalStorage } from '../useLocalStorage';

function TestComponent(): JSX.Element {
  const [count, setCount] = useLocalStorage<number>('test-key', 0);
  const plusOne = () => {
    console.log('set count ' + (count + 1));
    setCount(count + 1);
  };
  return (
    <div>
      {`Value: ${count}`}
      <button onClick={plusOne}>+1</button>
    </div>
  );
}

describe('useLocalStorage', () => {
  test('should call local storage api', async () => {
    const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    render(<TestComponent />);

    expect(getItemSpy).toHaveBeenCalledWith('test-key');

    act(() => {
      userEvent.click(screen.getByText('+1'));
    });

    expect(await screen.findByText('Value: 1')).toBeVisible();

    expect(setItemSpy).toHaveBeenCalledWith('test-key', '1');
  });
});
