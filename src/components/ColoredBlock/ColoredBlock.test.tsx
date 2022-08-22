import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChapterWrapper } from 'components/ChapterWrapper/ChapterWrapper';
import { useRerender } from 'hooks/useRerender';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { ColoredBlock } from './ColoredBlock';

function WithChapterWrapper(): JSX.Element {
  const rerender = useRerender();
  return (
    <BrowserRouter>
      <ChapterWrapper title="Chapter title" rerender={rerender}>
        <ColoredBlock>Inside the chapter wrapper</ColoredBlock>
      </ChapterWrapper>
    </BrowserRouter>
  );
}

describe('ColoredBlock', () => {
  test('should render correctly', async () => {
    const content = 'Colored block content';
    render(<ColoredBlock>{content}</ColoredBlock>);

    expect(await screen.findByText(content)).toBeVisible();
  });

  test('should override default styles', async () => {
    const content = 'Colored block content';
    render(<ColoredBlock style={{ display: 'none' }}>{content}</ColoredBlock>);

    expect(await screen.findByText(content)).not.toBeVisible();
  });

  test('should change color each render', async () => {
    act(() => {
      render(<WithChapterWrapper />);
    });

    expect(await screen.findByText('🔄')).toBeVisible();
    const bgColor = screen.getByTestId('colored-block').style.backgroundColor;

    await userEvent.click(screen.getByText('🔄'));
    const newBgColor = screen.getByTestId('colored-block').style.backgroundColor;
    expect(newBgColor !== bgColor).toBe(true);
  });
});
