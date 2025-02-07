import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { vi } from 'vitest';
import { useLoggedLifecycle } from '../useLoggedLifecycle';

function LifecycleTest() {
    useLoggedLifecycle('test');
    return <div>Lifecycle Test</div>;
}

function TestComponent() {
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
    const originalConsoleLog = console.log;
    let mockFn: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockFn = vi.fn();
        console.log = mockFn;
    });

    afterEach(() => {
        console.log = originalConsoleLog;
        vi.clearAllMocks();
    });

    test('should log lifecycle events', async () => {
        render(<TestComponent />);

        expect(mockFn).toHaveBeenCalledWith(
            '%c test %c                🔄 Rendering',
            expect.any(String),
            expect.any(String),
        );
        expect(mockFn).toHaveBeenCalledWith(
            '%c test %c                ✅ Mounted',
            expect.any(String),
            expect.any(String),
        );

        await userEvent.click(screen.getByText('remount'));

        expect(mockFn).toHaveBeenCalledWith(
            '%c test %c                🔄 Rendering',
            expect.any(String),
            expect.any(String),
        );
        expect(mockFn).toHaveBeenCalledWith(
            '%c test %c                ⛔️ Unmounting',
            expect.any(String),
            expect.any(String),
        );
    });
});
