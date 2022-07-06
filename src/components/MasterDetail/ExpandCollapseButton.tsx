import classnames from 'classnames';

import classes from './ExpandCollapseButton.module.css';

export interface ExpandCollapseButtonProps {
  expanded: boolean;
  onToggle?: () => void;
}

export function ExpandCollapseButton(props: ExpandCollapseButtonProps): JSX.Element {
  const { expanded, onToggle } = props;
  const className = classnames(classes.expandCollapseButton, expanded && classes.selected);

  return (
    <button className={className} onClick={onToggle}>
      {expanded ? '-' : '+'}
    </button>
  );
}
