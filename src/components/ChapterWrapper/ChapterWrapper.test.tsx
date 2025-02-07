import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { ChapterWrapper, ChapterWrapperProps } from './ChapterWrapper';

function TestWrapper(props: ChapterWrapperProps) {
    return (
        <BrowserRouter>
            <ChapterWrapper {...props} />
        </BrowserRouter>
    );
}

describe('ChapterWrapper', () => {
    test('should render correctly', async () => {
        const title = 'Title';
        const subtitle = 'Subtitle';

        render(
            <TestWrapper title={title} subtitle={subtitle}>
                Chapter content
            </TestWrapper>,
        );

        expect(screen.getByText(title)).toBeVisible();
        expect(screen.getByText(subtitle)).toBeVisible();
        expect(screen.getByText('❌')).toBeVisible();

        // we need to check that this element was not rendered
        // so we need to use queryByText instead of getByText
        expect(screen.queryByText('🔄')).toBeNull();
    });

    test('should show rerender button', async () => {
        const title = 'Title 123';
        const rerender = vi.fn();
        render(
            <TestWrapper title={title} rerender={rerender}>
                <div>Content</div>
            </TestWrapper>,
        );

        expect(screen.getByText(title)).toBeVisible();

        const rerenderButton = screen.getByText('🔄');
        expect(rerenderButton).toBeVisible();

        await userEvent.click(rerenderButton);

        expect(rerender).toHaveBeenCalledTimes(1);
    });
});
