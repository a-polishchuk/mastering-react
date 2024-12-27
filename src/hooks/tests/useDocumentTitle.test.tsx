import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { useDocumentTitle } from '../useDocumentTitle';

function TestComponent() {
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount((value) => value + 1);
    useDocumentTitle(count.toString());

    return <button onClick={increment}>increment</button>;
}

describe('useDocumentTitle', () => {
    test('should sync title with state', async () => {
        render(<TestComponent />);

        await waitFor(() => {
            expect(document.title).toBe('0');
        });

        await userEvent.click(screen.getByText('increment'));

        expect(document.title).toBe('1');
    });
});
