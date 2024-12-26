import { Toolbar } from 'components';
type Props = {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
};

export function Field({ label, value, onChange }: Props) {
  return (
    <Toolbar>
      <div style={{ minWidth: 200 }}>{label}</div>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </Toolbar>
  );
}
