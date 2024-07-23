import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';

const CheckWinner: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { squares, checkWinner } = gameContext;

  const winner = checkWinner(squares);

  return (
    <div className="winner">
      {winner ? <p>Winner: {winner}</p> : <p>No Winner Yet</p>}
    </div>
  );
};

export default CheckWinner;
