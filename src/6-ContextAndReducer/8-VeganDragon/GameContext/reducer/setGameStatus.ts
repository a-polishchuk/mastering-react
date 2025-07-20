import { GameContextState, GameStatus } from '../../types';

export function setGameStatus(state: GameContextState, gameStatus: GameStatus): GameContextState {
    return {
        ...state,
        gameStatus,
    };
}
