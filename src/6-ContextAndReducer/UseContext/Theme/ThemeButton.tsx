import { CSSProperties, useState } from 'react';

import { Theme } from './Theme';
import { useCurrentTheme } from './ThemeContext';

function buildStyle(theme: Theme, pressed: boolean, disabled: boolean): CSSProperties {
  const { primaryColor, secondaryColor } = theme;
  const primary = pressed ? secondaryColor : primaryColor;
  const secondary = pressed ? primaryColor : secondaryColor;
  return {
    backgroundColor: secondary,
    border: `1px solid ${primary}`,
    color: primary,
    textShadow: '1px 1px white',
    padding: '10px 20px',
    fontWeight: 600,
    opacity: disabled ? 0.4 : 1,
  };
}

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ThemeButton(props: Props): JSX.Element {
  const { text, onClick, disabled = false } = props;
  const [pressed, setPressed] = useState<boolean>(false);
  const theme = useCurrentTheme();

  const onMouseDown = () => setPressed(true);
  const onMouseUp = () => setPressed(false);

  return (
    <button
      style={buildStyle(theme, pressed, disabled)}
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {text}
    </button>
  );
}
