import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { Button } from './Button';

describe('Button', () => {
  test('click handler should be called on click', async () => {
    const clickHandler = vi.fn();
    render(<Button text="Click me!" onClick={clickHandler} />);

    expect(await screen.findByText('Click me!')).toBeVisible();

    await userEvent.click(screen.getByText('Click me!'));

    expect(clickHandler).toBeCalledTimes(1);
  });

  test('click handler should not be called when disabled', async () => {
    const clickHandler = vi.fn();
    render(<Button text="Click me!" onClick={clickHandler} disabled />);

    expect(await screen.findByText('Click me!')).toBeVisible();

    await userEvent.click(screen.getByText('Click me!'));

    expect(clickHandler).not.toBeCalled();
  });
});
