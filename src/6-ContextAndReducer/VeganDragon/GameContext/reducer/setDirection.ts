import { Direction, GameContextState } from '../../types';

export function setDirection(state: GameContextState, newDirection: Direction): GameContextState {
  const { direction } = state;

  if (newDirection === getOppositeDirection(direction)) {
    return state;
  }

  return {
    ...state,
    direction: newDirection,
  };
}

function getOppositeDirection(direction: Direction): Direction {
  switch (direction) {
    case Direction.DOWN:
      return Direction.UP;
    case Direction.LEFT:
      return Direction.RIGHT;
    case Direction.UP:
      return Direction.DOWN;
    case Direction.RIGHT:
      return Direction.LEFT;
    default:
      throw new Error(`Unknown direction ${direction}`);
  }
}
