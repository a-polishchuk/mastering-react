import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventType, useWindowEvent } from 'hooks/useWindowEvent';
import { vi } from 'vitest';

type TestProps = {
    eventName: EventType;
    callback: () => void;
};

function TestComponent({ eventName, callback }: TestProps) {
    useWindowEvent(eventName, () => callback());
    return <div>Test Component</div>;
}

describe('useEventListener', () => {
    test('should listen to keypress event', async () => {
        const onKeyPress = vi.fn();

        render(<TestComponent eventName="keypress" callback={onKeyPress} />);

        await userEvent.keyboard('key');

        expect(onKeyPress).toHaveBeenCalledTimes(3);
    });

    test('should listen to click event', async () => {
        const onClick = vi.fn();

        render(
            <div data-testid="parent-node">
                <div>Some other node</div>
                <TestComponent eventName="click" callback={onClick} />
            </div>,
        );

        await userEvent.click(screen.getByTestId('parent-node'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
