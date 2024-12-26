import { ChapterWrapper } from 'components';
import { Fragment } from 'react';

function Fruits() {
  return (
    <Fragment>
      <li>apple 🍎</li>
      <li>pear 🍐</li>
      <li>orange 🍊</li>
      <li>banana 🍌</li>
      <li>watermelon 🍉</li>
    </Fragment>
  );
}

function Vegetables() {
  return (
    <>
      <li>tomato 🍅</li>
      <li>eggplant 🍆</li>
      <li>avocado 🥑</li>
      <li>cucumber 🥒</li>
      <li>pepper 🌶</li>
    </>
  );
}

export function Fragments() {
  return (
    <ChapterWrapper title="Fragments" subtitle="Introduction to JSX">
      List of fruits and vegetables:
      <ul>
        <Fruits />
        <Vegetables />
      </ul>
    </ChapterWrapper>
  );
}
