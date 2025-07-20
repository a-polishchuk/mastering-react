export enum CellType {
    EMPTY = '',
    SNAKE = 's',
    SNAKE_HEAD = '🐲',
}

export enum Direction {
    UP = 'up',
    RIGHT = 'right',
    DOWN = 'down',
    LEFT = 'left',
}

export enum ActionType {
    PLAY = 'play',
    PAUSE = 'pause',
    FINISH = 'finish',
    PLAY_AGAIN = 'play_again',
    MOVE = 'move',
    SPAWN_VEGETABLE = 'spawn_vegetable',
    SET_DIRECTION = 'set_direction',
}

export type Action =
    | {
          type: ActionType.PLAY;
      }
    | {
          type: ActionType.PAUSE;
      }
    | {
          type: ActionType.FINISH;
      }
    | {
          type: ActionType.PLAY_AGAIN;
      }
    | {
          type: ActionType.MOVE;
      }
    | {
          type: ActionType.SPAWN_VEGETABLE;
      }
    | {
          type: ActionType.SET_DIRECTION;
          direction: Direction;
      };

export enum GameStatus {
    IDLE = 'idle',
    PLAYING = 'playing',
    PAUSED = 'paused',
    FINISHED = 'finished',
}

export type CellIndex = [number, number];

export type SnakeSegment = {
    row: number;
    col: number;
    next?: SnakeSegment;
};

export type Vegetable = {
    row: number;
    col: number;
    character: string;
};

export type GameContextState = {
    gameStatus: GameStatus;
    points: number;
    direction: Direction;
    rows: number;
    cols: number;
    vegetables: Vegetable[];
    snakeHead: SnakeSegment;
    grid: string[][];
};
