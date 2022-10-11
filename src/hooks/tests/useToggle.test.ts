import { act, renderHook } from '@testing-library/react-hooks';

import { useToggle } from './useToggle';

describe('useToggle', () => {
  test('should toggle boolean value', async () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(false);
  });
});
