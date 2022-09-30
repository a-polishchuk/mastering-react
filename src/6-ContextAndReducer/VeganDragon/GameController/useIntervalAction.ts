import { useInterval } from 'hooks/useInterval';

import { useGameContext } from '../GameContext/GameContext';
import { ActionType, GameStatus } from '../types';

export function useIntervalAction(actionType: ActionType, playingDelay: number) {
  const [state, dispatch] = useGameContext();
  const isPlaying = state.gameStatus === GameStatus.PLAYING;
  const delay = isPlaying ? playingDelay : null;

  useInterval(() => dispatch({ type: actionType }), delay);
}
