import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';

interface SquareProps {
  index: number;
  value: string;
}

const Square: React.FC<SquareProps> = ({ index, value }) => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { squares, setSquares, currentPlayer, setCurrentPlayer, checkWinner } = gameContext;

  const handleClick = () => {
    if (squares[index] || checkWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;

    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
