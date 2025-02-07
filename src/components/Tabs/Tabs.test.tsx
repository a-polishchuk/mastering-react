import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs } from './Tabs';

describe('Tabs', () => {
    const mockTabs = ['Tab 1', 'Tab 2', 'Tab 3'];

    it('renders all tab headers', () => {
        render(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        mockTabs.forEach((tab) => {
            expect(screen.getByText(tab)).toBeInTheDocument();
        });
    });

    it('renders first tab content by default', () => {
        render(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        expect(screen.getByText('Content 1')).toBeInTheDocument();
        expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Content 3')).not.toBeInTheDocument();
    });

    it('switches content when clicking different tabs', () => {
        render(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        // Click second tab
        fireEvent.click(screen.getByText('Tab 2'));

        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
        expect(screen.getByText('Content 2')).toBeInTheDocument();
        expect(screen.queryByText('Content 3')).not.toBeInTheDocument();

        // Click third tab
        fireEvent.click(screen.getByText('Tab 3'));

        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
        expect(screen.getByText('Content 3')).toBeInTheDocument();
    });

    it('calls onSelect callback when tab is clicked', () => {
        const handleSelect = vi.fn();
        render(
            <Tabs tabs={mockTabs} onSelect={handleSelect}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        fireEvent.click(screen.getByText('Tab 2'));
        expect(handleSelect).toHaveBeenCalledWith(1);

        fireEvent.click(screen.getByText('Tab 3'));
        expect(handleSelect).toHaveBeenCalledWith(2);
    });

    it('handles fewer children than tabs gracefully', () => {
        render(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
            </Tabs>,
        );

        expect(screen.getByText('Content 1')).toBeInTheDocument();

        // Click second tab (which has no content)
        fireEvent.click(screen.getByText('Tab 2'));
        expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });

    it('maintains selected tab state between renders', () => {
        const { rerender } = render(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        // Select second tab
        fireEvent.click(screen.getByText('Tab 2'));
        expect(screen.getByText('Content 2')).toBeInTheDocument();

        // Rerender with same props
        rerender(
            <Tabs tabs={mockTabs}>
                <div>Content 1</div>
                <div>Content 2</div>
                <div>Content 3</div>
            </Tabs>,
        );

        // Second tab should still be selected
        expect(screen.getByText('Content 2')).toBeInTheDocument();
    });
});
