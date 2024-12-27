type EntryProps = {
    name: string;
    value: any;
};

function Entry({ name, value }: EntryProps) {
    return (
        <tr>
            <td>{name}</td>
            <td>{typeof value === 'object' ? <PropsTable data={value} /> : value}</td>
        </tr>
    );
}

export type PropsTableProps = {
    title?: string;
    data: Record<string, any> | null | undefined;
};

export function PropsTable({ title, data }: PropsTableProps) {
    if (!data) {
        return <></>;
    }

    return (
        <table>
            {title && (
                <thead>
                    <tr>
                        <th colSpan={2}>{title}</th>
                    </tr>
                </thead>
            )}
            <tbody>
                {Object.entries(data).map(([name, value]) => (
                    <Entry key={name} name={name} value={value} />
                ))}
            </tbody>
        </table>
    );
}
