import { CSSProperties, memo } from 'react';
import { CellType } from '../types';

enum BgColor {
  NONE = 'inherit',
  SNAKE = '#2B27',
  VEGETABLE = '#FF8',
}

function getStyle(content: string): CSSProperties {
  const isSnake = content === CellType.SNAKE || content === CellType.SNAKE_HEAD;
  const backgroundColor = isSnake ? BgColor.SNAKE : content ? BgColor.VEGETABLE : BgColor.NONE;
  return {
    textAlign: 'center',
    width: '30px',
    height: '30px',
    backgroundColor,
  };
}

interface Props {
  content: string;
}

export const Cell = memo(({ content }: Props): JSX.Element => {
  const style = getStyle(content);
  const text = content === CellType.SNAKE ? '' : content;

  return <td style={style}>{text}</td>;
});
