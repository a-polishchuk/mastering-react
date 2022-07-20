import { useInterval } from 'hooks/useInterval';

import { useGameContext } from '../GameContext';
import { ActionType, GameStatus, MOVE_DELAY, SPAWN_DELAY } from '../types';
import { useHandleDirection } from './useHandleDirection';

export function Controller(): null {
  useHandleDirection();
  useIntervalAction(ActionType.MOVE, MOVE_DELAY);
  useIntervalAction(ActionType.SPAWN_VEGETABLE, SPAWN_DELAY);
  return null;
}

function useIntervalAction(actionType: ActionType, playingDelay: number) {
  const [state, dispatch] = useGameContext();
  const delay = state.gameStatus === GameStatus.PLAYING ? playingDelay : null;

  useInterval(() => dispatch({ type: actionType }), delay);
}
