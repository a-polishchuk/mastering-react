import { MOVE_DELAY, SPAWN_DELAY } from '../constants';
import { ActionType } from '../types';
import { useHandleDirection } from './useHandleDirection';
import { useIntervalAction } from './useIntervalAction';

export function GameController(): null {
  useHandleDirection();

  useIntervalAction(ActionType.MOVE, MOVE_DELAY);
  useIntervalAction(ActionType.SPAWN_VEGETABLE, SPAWN_DELAY);

  return null;
}
