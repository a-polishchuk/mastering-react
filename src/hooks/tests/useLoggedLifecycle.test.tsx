import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { vi } from 'vitest';

import { useLoggedLifecycle } from '../useLoggedLifecycle';

function LifecycleTest(): JSX.Element {
  useLoggedLifecycle('test');
  return <div>Lifecycle Test</div>;
}

function TestComponent(): JSX.Element {
  const [key, setKey] = useState<number>(0);
  const incrementKey = () => {
    setKey((value) => value + 1);
  };
  return (
    <div>
      <div>Test Component</div>
      <button onClick={incrementKey}>remount</button>
      <LifecycleTest key={key} />
    </div>
  );
}

describe('useLoggedLifecycle', () => {
  test('should log lifecycle events', async () => {
    const mockFn = vi.fn();
    console.log = mockFn;
    render(<TestComponent />);

    expect(mockFn.mock.calls[0][0]).toBe('%c test %c                🔄 Rendering');
    expect(mockFn.mock.calls[1][0]).toBe('%c test %c                ✅ Mounted');

    await userEvent.click(screen.getByText('remount'));

    await waitFor(() => {
      expect(mockFn.mock.calls[2][0]).toBe('%c test %c                🔄 Rendering');
    });

    await waitFor(() => {
      expect(mockFn.mock.calls[3][0]).toBe('%c test %c                ⛔️ Unmounting');
    });
  });
});
