import { useKeyDown } from '2-SideEffects/UseGlobalEvents/useKeyDown';

import { useGameContext } from '../GameContext/GameContext';
import { ActionType, Direction, GameStatus } from '../types';

export function useHandleDirection() {
  const [state, dispatch] = useGameContext();
  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  const setDirection = (direction: Direction) => {
    dispatch({
      type: ActionType.SET_DIRECTION,
      payload: direction,
    });
  };

  useKeyDown((buttonKey: string) => {
    if (!isPlaying) {
      return;
    }
    switch (buttonKey) {
      case 'ArrowUp':
        setDirection(Direction.UP);
        break;
      case 'ArrowRight':
        setDirection(Direction.RIGHT);
        break;
      case 'ArrowDown':
        setDirection(Direction.DOWN);
        break;
      case 'ArrowLeft':
        setDirection(Direction.LEFT);
        break;
    }
  });
}
