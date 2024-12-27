import { MOVES_PER_SPAWN } from '../constants';
import { useSettingsContext } from '../Settings/SettingsContext';
import { ActionType } from '../types';
import { useHandleDirection } from './useHandleDirection';
import { useIntervalAction } from './useIntervalAction';

export function GameController(): null {
    const { moveDelay } = useSettingsContext();

    useHandleDirection();
    useIntervalAction(ActionType.MOVE, moveDelay);
    useIntervalAction(ActionType.SPAWN_VEGETABLE, moveDelay * MOVES_PER_SPAWN);

    return null;
}
