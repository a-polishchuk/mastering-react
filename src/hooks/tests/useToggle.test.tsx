import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useToggle } from '../useToggle';

function TestComponent() {
  const [toggled, toggle] = useToggle(false);
  return (
    <div>
      <div>{toggled ? 'YEAH' : 'NOPE'}</div>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
}

describe('useToggle', () => {
  test('should toggle boolean value', async () => {
    render(<TestComponent />);

    expect(await screen.findByText('NOPE')).toBeVisible();

    await userEvent.click(screen.getByText('Toggle'));

    expect(await screen.findByText('YEAH')).toBeVisible();

    await userEvent.click(screen.getByText('Toggle'));

    expect(await screen.findByText('NOPE')).toBeVisible();
  });
});
