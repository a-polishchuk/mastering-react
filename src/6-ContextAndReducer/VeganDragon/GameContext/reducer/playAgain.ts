import { GameContextState, GameStatus } from '../../types';
import { INITIAL_STATE } from './initialState';

export function playAgain(): GameContextState {
  return {
    ...INITIAL_STATE,
    gameStatus: GameStatus.PLAYING,
  };
}
