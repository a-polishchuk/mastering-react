import { useEventListener } from 'hooks/useEventListener';

import { useGameContext } from '../GameContext';
import { ActionType, Direction, GameStatus } from '../types';

export function useHandleDirection() {
  const [state, dispatch] = useGameContext();
  const isPlaying = state.gameStatus === GameStatus.PLAYING;

  useEventListener('keydown', (event) => {
    if (!isPlaying) {
      return;
    }

    const setDirection = (direction: Direction) => {
      dispatch({
        type: ActionType.SET_DIRECTION,
        payload: direction,
      });
    };

    const { code } = event as KeyboardEvent;
    switch (code) {
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
      default:
        break;
    }
  });
}
