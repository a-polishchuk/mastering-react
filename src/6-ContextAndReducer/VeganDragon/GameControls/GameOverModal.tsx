import { Modal } from './Modal';

interface Props {
  points: number;
  prevHighScore: number;
  onPlayAgain: () => void;
}

export function GameOverModal({ points, prevHighScore, onPlayAgain }: Props): JSX.Element {
  const message = (
    <>
      You scored <b>{points}</b> points!
      {points > prevHighScore ? (
        <p>
          <b>This is a new high score!</b>
        </p>
      ) : (
        <p>High score: {prevHighScore}</p>
      )}
    </>
  );

  return (
    <Modal
      title="Game Over"
      message={message}
      buttons={{
        'Play Again': onPlayAgain,
      }}
    />
  );
}
