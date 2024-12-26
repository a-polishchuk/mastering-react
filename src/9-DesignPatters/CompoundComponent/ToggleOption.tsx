import { Button } from 'components';
import { noop } from 'lodash';

export interface ToggleOptionProps {
  option: any;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function ToggleOption(props: ToggleOptionProps) {
  const { option, label, selected, onClick } = props;

  return <Button text={label || option} onClick={onClick ?? noop} disabled={selected} />;
}
