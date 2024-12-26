import { HTMLInputTypeAttribute } from 'react';

interface FormFieldProps {
  name: string;
  label: string;
  value: string | number | null;
  onChange: (newValue: string) => void;
  type?: HTMLInputTypeAttribute;
}

export function FormField(props: FormFieldProps) {
  const { name, label, value, onChange, type = 'text' } = props;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ minWidth: 200 }}>
        <label htmlFor={name}>{label}</label>
      </div>
      <input
        name={name}
        type={type}
        value={value ?? undefined}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
