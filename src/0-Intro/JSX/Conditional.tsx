import { Button } from 'components';
import { ChapterHeader } from 'components';
import { FlexFiller } from 'components';
import { Toolbar } from 'components';
import { ValueLabel } from 'components';
import { useRerender } from 'hooks/useRerender';
import { generateRandomNumber } from 'utils/generateRandomNumber';

export function Conditional(): JSX.Element {
  const rerender = useRerender();
  const randomNumber = Math.round(generateRandomNumber(1, 12));

  const header = (
    <>
      <ChapterHeader title="JSX Basics" subtitle="Conditional" />
      <Toolbar>
        <ValueLabel value={`🎲🎲 ${randomNumber}`} />
        <FlexFiller />
        <Button text="Throw the dices" onClick={rerender} />
      </Toolbar>
    </>
  );

  if (randomNumber > 11) {
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
