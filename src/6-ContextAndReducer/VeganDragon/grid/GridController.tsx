import { useGameContext } from '../GameContext/GameContext';
import { useSettingsContext } from '../Settings/SettingsContext';
import { AlternativeGrid } from './AlternativeGrid/AlternativeGrid';
import { DefaultGrid } from './DefaultGrid/DefaultGrid';

export function GridController(): JSX.Element {
  const [{ grid }] = useGameContext();
  const { useAlternativeGrid } = useSettingsContext();
  const Grid = useAlternativeGrid ? AlternativeGrid : DefaultGrid;

  return <Grid grid={grid} />;
}
