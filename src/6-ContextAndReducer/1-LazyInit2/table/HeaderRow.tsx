export function HeaderRow({ maxPower }: { maxPower: number }) {
    const cells = [];

    for (let pow = 1; pow <= maxPower; pow++) {
        cells.push(
            <th style={{ minWidth: 100 }} key={pow}>
                ^{pow}
            </th>,
        );
    }

    return <tr>{cells}</tr>;
}
