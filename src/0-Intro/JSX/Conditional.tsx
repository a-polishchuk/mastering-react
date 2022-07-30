import { ChapterWrapper, Toolbar, ValueLabel } from 'components';
import { useRerender } from 'hooks/useRerender';
import { generateRandomNumber } from 'utils/generateRandomNumber';

function RandomContent({ randomNumber }: { randomNumber: number }): JSX.Element | null {
  if (randomNumber > 11) {
    return null;
  }

  const butterfly = randomNumber === 1 ? '🐛' : '🦋';
  const greaterThanFive = randomNumber > 5;

  return (
    <div style={{ fontSize: 48 }}>
      <Toolbar>
        <span>{randomNumber % 2 === 0 ? '🐈' : '🐈‍⬛'}</span>
        <span>{butterfly}</span>
        {randomNumber === 6 ? <span>🐬</span> : null}
        {randomNumber % 3 === 0 && <span>🦔</span>}
        <span>{greaterThanFive && '🦕'}</span>
      </Toolbar>
    </div>
  );
}

export function Conditional(): JSX.Element {
  const randomNumber = Math.round(generateRandomNumber(1, 12));

  return (
    <ChapterWrapper
      title="Introduction to JSX"
      subtitle="Conditional rendering"
      rerender={useRerender()}
    >
      <Toolbar>
        <ValueLabel value={`🎲🎲 ${randomNumber}`} />
      </Toolbar>
      <RandomContent randomNumber={randomNumber} />
    </ChapterWrapper>
  );
}
