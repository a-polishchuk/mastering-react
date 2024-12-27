import { render, screen } from '@testing-library/react';
import { useAnimatedText } from '../useAnimatedText';

function TestComponent({ text }: { text: string }) {
    const animatedText = useAnimatedText(text, 10);
    return <div>{animatedText}</div>;
}

describe('useAnimatedText', () => {
    test('should change text over time', async () => {
        render(<TestComponent text="animated" />);

        expect(await screen.findByText('an')).toBeVisible();
        expect(await screen.findByText('anima')).toBeVisible();
        expect(await screen.findByText('animate')).toBeVisible();
    });
});
