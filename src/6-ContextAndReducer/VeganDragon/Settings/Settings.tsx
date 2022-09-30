import { Button } from 'components';

import { useSettingsContext } from './SettingsContext';

export function Settings(): JSX.Element {
  const { setUseAlternativeGrid } = useSettingsContext();

  const switchGrid = () => {
    setUseAlternativeGrid((value) => !value);
  };

  return (
    <div style={{ position: 'absolute', right: 10, top: 10 }}>
      <Button text="Switch grid" onClick={switchGrid} />
    </div>
  );
}
