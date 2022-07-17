import { Button } from 'components/Button';
import { ChapterHeader } from 'components/ChapterHeader';
import { Toolbar } from 'components/Toolbar';
import { ValueLabel } from 'components/ValueLabel';
import { useRerender } from 'hooks/useRerender';
import { generateRandomNumber } from 'utils/generateRandomNumber';

export function Conditional(): JSX.Element {
  const rerender = useRerender();
  const randomNumber = Math.round(generateRandomNumber(0, 10));

  const header = (
    <>
      <ChapterHeader title="JSX Basics" subtitle="Conditional" />
      <Toolbar>
        <Button text="Click me to re-render" onClick={rerender} />
        <ValueLabel value={randomNumber} />
      </Toolbar>
    </>
  );

  if (randomNumber > 8) {
    return header;
  }

  const butterfly = randomNumber === 1 ? '🐛' : '🦋';
  const greaterThanFive = randomNumber > 5;

  return (
    <>
      {header}
      <div style={{ fontSize: 48 }}>
        <Toolbar>
          <span>{randomNumber % 2 === 0 ? '🐈' : '🐈‍⬛'}</span>
          <span>{butterfly}</span>
          {randomNumber === 6 ? <span>🐬</span> : null}
          {randomNumber % 3 === 0 && <span>🦔</span>}
          <span>{greaterThanFive && '🦕'}</span>
        </Toolbar>
      </div>
    </>
  );
}
