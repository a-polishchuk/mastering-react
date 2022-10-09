import { Button } from 'components';

const stub = () => {};

export interface ToggleOptionProps {
  option: any;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function ToggleOption(props: ToggleOptionProps): JSX.Element {
  const { option, label, selected, onClick } = props;

  return <Button text={label || option} onClick={onClick ?? stub} disabled={selected} />;
}
