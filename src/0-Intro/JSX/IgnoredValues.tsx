import { ChapterWrapper } from 'components';

type Pair = [string, any];

const ignoredValues: Pair[] = [
  ['undefined', undefined],
  ['null', null],
  ['false', false],
  ['true', true],
  ['[]', []],
  [`''`, ''],
];

const renderableValues: Pair[] = [
  ['0', 0],
  [`['1', '2', '3']`, ['1', '2', '3']],
];

export function IgnoredValues(): JSX.Element {
  return (
    <ChapterWrapper title="Ignored values" subtitle="Introduction to JSX">
      <h3>Let's look at what CAN and what CANNOT be rendered by React</h3>
      <br />

      <div style={{ display: 'flex', gap: 24 }}>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>❌ These values will NOT be rendered</th>
            </tr>
          </thead>
          <tbody>
            {ignoredValues.map(([key, value], index) => (
              <tr key={index}>
                <td>
                  <code>{key}</code>
                </td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colSpan={2}>✅ These values WILL be rendered</th>
            </tr>
          </thead>
          <tbody>
            {renderableValues.map(([key, value], index) => (
              <tr key={key}>
                <td>
                  <code>{key}</code>
                </td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChapterWrapper>
  );
}
