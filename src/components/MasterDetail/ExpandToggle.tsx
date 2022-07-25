import classes from './ExpandToggle.module.css';

interface Props {
  expanded: boolean;
  onClick?: () => void;
}

export function ExpandToggle({ expanded, onClick }: Props): JSX.Element {
  return (
    <div className={classes.expandToggle} onClick={onClick}>
      {expanded ? '➖' : '➕'}
    </div>
  );
}
