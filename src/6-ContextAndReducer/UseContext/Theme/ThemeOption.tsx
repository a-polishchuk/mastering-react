import { CSSProperties } from 'react';
import { Theme } from './Theme';

function squareStyle(size: number, backgroundColor: string): CSSProperties {
  return {
    width: size,
    height: size,
    backgroundColor,
  };
}

type Props = {
  theme: Theme;
  selected: boolean;
  onSelect: (theme: Theme) => void;
};

export function ThemeOption({ theme, selected, onSelect }: Props) {
  const { primaryColor, secondaryColor } = theme;
  const cellSize = selected ? 50 : 40;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={() => onSelect(theme)}
    >
      <div style={squareStyle(cellSize, primaryColor)} />
      <div style={squareStyle(cellSize, secondaryColor)} />
    </div>
  );
}
