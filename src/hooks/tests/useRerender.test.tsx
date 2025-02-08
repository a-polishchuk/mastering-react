import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRef } from 'react';
import { useRerender } from '../useRerender';

function TestComponent() {
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

        expect(screen.getByText('Renders count: 1')).toBeVisible();

        await userEvent.click(screen.getByText('RERENDER'));

        expect(screen.getByText('Renders count: 2')).toBeVisible();

        await userEvent.click(screen.getByText('RERENDER'));
        await userEvent.click(screen.getByText('RERENDER'));

        expect(screen.getByText('Renders count: 4')).toBeVisible();
    });
});
