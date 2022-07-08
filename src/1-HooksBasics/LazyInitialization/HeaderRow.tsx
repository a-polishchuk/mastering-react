export function HeaderRow({ maxPow }: { maxPow: number }): JSX.Element {
  const cells = [];

  for (let pow = 1; pow <= maxPow; pow++) {
    cells.push(
      <th style={{ minWidth: 100 }} key={pow}>
        ^{pow}
      </th>
    );
  }

  return <tr>{cells}</tr>;
}
