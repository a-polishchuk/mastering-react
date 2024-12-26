import { Toolbar } from 'components';
import { ReactElement } from 'react';

import { ToggleOption, ToggleOptionProps } from './ToggleOption';

interface Props {
  value: any;
  onChange: (newValue: any) => void;
  children: ReactElement<ToggleOptionProps>[];
}

export function ToggleButton({ value, onChange, children }: Props) {
  const childProps = children.map(({ props }) => ({
    ...props,
    selected: props.option === value,
    onClick: () => onChange(props.option),
  }));

  return (
    <Toolbar>
      {childProps.map((props) => (
        <ToggleOption {...props} />
      ))}
    </Toolbar>
  );
}
