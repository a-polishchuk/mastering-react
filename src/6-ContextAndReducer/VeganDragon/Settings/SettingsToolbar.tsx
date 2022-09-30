import { Button, Toolbar } from 'components';

import { useSettingsContext } from './SettingsContext';

export function SettingsToolbar(): JSX.Element {
  const { setUseAlternativeGrid, moveDelay, changeMoveDelay } = useSettingsContext();
  const moveDelaySeconds = (moveDelay / 1000).toFixed(1);

  const switchGrid = () => {
    setUseAlternativeGrid((value) => !value);
  };

  return (
    <Toolbar>
      <Button text="Switch grid" onClick={switchGrid} />
      <Button text={`Move delay: ${moveDelaySeconds}s`} onClick={changeMoveDelay} />
    </Toolbar>
  );
}
