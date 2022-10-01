import { CellIndex, CellType, Direction, SnakeSegment, Vegetable } from '../../types';

export function getNextCell(
  row: number,
  col: number,
  rows: number,
  cols: number,
  direction: Direction
): CellIndex {
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case Direction.LEFT:
      newCol = col > 0 ? col - 1 : cols - 1;
      break;
    case Direction.RIGHT:
      newCol = col < cols - 1 ? col + 1 : 0;
      break;
    case Direction.DOWN:
      newRow = row < rows - 1 ? row + 1 : 0;
      break;
    case Direction.UP:
      newRow = row > 0 ? row - 1 : rows - 1;
      break;
    default:
      break;
  }

  return [newRow, newCol];
}

export function getPrevCell(
  row: number,
  col: number,
  rows: number,
  cols: number,
  direction: Direction
): CellIndex {
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case Direction.LEFT:
      newCol = col < cols - 1 ? col + 1 : 0;
      break;
    case Direction.RIGHT:
      newCol = col > 0 ? col - 1 : cols - 1;
      break;
    case Direction.DOWN:
      newRow = row > 0 ? row - 1 : rows - 1;
      break;
    case Direction.UP:
      newRow = row < rows - 1 ? row + 1 : 0;
      break;
    default:
      break;
  }

  return [newRow, newCol];
}

export function buildGrid(
  rows: number,
  cols: number,
  snakeHead: SnakeSegment,
  vegetables: Vegetable[]
): string[][] {
  const grid = new Array<string[]>();
  for (let r = 0; r < rows; r++) {
    grid.push(new Array<string>(cols).fill(''));
  }

  for (const v of vegetables) {
    grid[v.row][v.col] = v.character;
  }

  let segment: SnakeSegment | undefined = snakeHead;
  while (segment) {
    const { row, col } = segment;
    grid[row][col] = CellType.SNAKE;
    segment = segment.next;
  }

  const { row: headRow, col: headCol } = snakeHead;
  grid[headRow][headCol] = CellType.SNAKE_HEAD;

  return grid;
}

export function findDirection(from: SnakeSegment, to: SnakeSegment): Direction | null {
  if (from === to) {
    return null;
  }
  if (from.row === to.row) {
    if (from.col === to.col) {
      return null;
    }
    return from.col > to.col ? Direction.LEFT : Direction.RIGHT;
  } else {
    return from.row > to.row ? Direction.UP : Direction.DOWN;
  }
}

export function findTail(head: SnakeSegment): SnakeSegment {
  let segment = head;
  while (segment.next) {
    segment = segment.next;
  }
  return segment;
}
