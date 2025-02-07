import { render, screen } from '@testing-library/react';
import { RendersCounter } from './RendersCounter';

describe('RendersCounter', () => {
    it('renders children correctly', () => {
        render(
            <RendersCounter>
                <div>Test Content</div>
            </RendersCounter>,
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('displays initial render count of 1', () => {
        render(
            <RendersCounter>
                <div>Test Content</div>
            </RendersCounter>,
        );

        expect(screen.getByText('R: 1')).toBeInTheDocument();
    });

    it('increments render count on re-renders', () => {
        const { rerender } = render(
            <RendersCounter>
                <div>Test Content</div>
            </RendersCounter>,
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
        expect(screen.getByText('R: 1')).toBeInTheDocument();

        rerender(
            <RendersCounter>
                <div>Updated Content</div>
            </RendersCounter>,
        );

        expect(screen.getByText('Updated Content')).toBeInTheDocument();
        expect(screen.getByText('R: 2')).toBeInTheDocument();
    });
});
