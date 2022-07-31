import { ChapterWrapper, Toolbar, ValueLabel } from 'components';

interface ConditionalContentProps {
  value: number;
}

function ConditionalContent({ value }: ConditionalContentProps): JSX.Element | null {
  if (value > 11) {
    return null;
  }

  const butterfly = value === 1 ? '🐛' : '🦋';
  const greaterThanFive = value > 5;

  return (
    <div style={{ fontSize: 48 }}>
      <Toolbar>
        <ValueLabel value={value} minWidth={150} />
        <span>{value % 2 === 0 ? '🐈' : '🐈‍⬛'}</span>
        <span>{butterfly}</span>
        {value === 6 ? <span>🐬</span> : null}
        {value % 3 === 0 && <span>🦔</span>}
        <span>{greaterThanFive && '🦕'}</span>
      </Toolbar>
    </div>
  );
}

export function Conditional(): JSX.Element {
  const numbers = new Array(12).fill(0).map((value, index) => index + 1);

  return (
    <ChapterWrapper title="Conditional rendering" subtitle="Introduction to JSX">
      {numbers.map((num) => (
        <ConditionalContent key={num} value={num} />
      ))}
    </ChapterWrapper>
  );
}
