export const MOVE_DELAY = 500;
export const SPAWN_DELAY = 3000;
export const POINTS_INCREMENT = 100;

export const HIGH_SCORE_KEY = 'vegan-dragon-high-score';

export const VEGETABLES = [
  '🍏',
  '🍎',
  '🍐',
  '🍊',
  '🍋',
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥥',
  '🥝',
  '🍅',
  '🍆',
  '🥑',
  '🥦',
  '🥬',
  '🥒',
  '🌶',
  '🌽',
  '🥕',
  '🧄',
  '🧅',
  '🥔',
  '🍠',
];

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

export interface Action {
  type: ActionType;
  payload?: any;
}

export enum GameStatus {
  IDLE = 'idle',
  PLAYING = 'playing',
  PAUSED = 'paused',
  FINISHED = 'finished',
}

export type CellIndex = [number, number];

export interface SnakeSegment {
  row: number;
  col: number;
  next?: SnakeSegment;
}

export interface Vegetable {
  row: number;
  col: number;
  character: string;
}

export interface GameContextState {
  gameStatus: GameStatus;
  points: number;
  direction: Direction;
  rows: number;
  cols: number;
  vegetables: Vegetable[];
  snakeHead: SnakeSegment;
  grid: string[][];
}
