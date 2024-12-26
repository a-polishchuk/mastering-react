import { useAnimatedText } from 'hooks/useAnimatedText';
import { AlienMessage } from './AlienMessage';

export function DotsMessage({ color }: { color: string }) {
  const dotsText = useAnimatedText('...', 400);

  return (
    <AlienMessage
      color={color}
      message={{
        id: 'dots-message',
        text: `.${dotsText}`,
      }}
    />
  );
}
