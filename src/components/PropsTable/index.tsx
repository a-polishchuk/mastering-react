interface EntryProps {
  name: string;
  value: any;
}

function Entry({ name, value }: EntryProps): JSX.Element {
  return (
    <tr>
      <td>{name}</td>
      <td>{typeof value === 'object' ? <PropsTable data={value} /> : value}</td>
    </tr>
  );
}

export interface PropsTableProps {
  title?: string;
  data: Record<string, any>;
}

export function PropsTable({ title, data }: PropsTableProps): JSX.Element {
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
