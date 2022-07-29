import { Toolbar } from 'components';

import { useThemeContext } from './ThemeContext';
import { ThemeOption } from './ThemeOption';

export function ThemeToolbar(): JSX.Element {
  const [themesPalette, setThemeIndex] = useThemeContext();
  const { themes, themeIndex } = themesPalette;

  return (
    <Toolbar>
      {themes.map((theme, index) => (
        <ThemeOption
          key={index}
          theme={theme}
          selected={index === themeIndex}
          onSelect={() => setThemeIndex(index)}
        />
      ))}
    </Toolbar>
  );
}
