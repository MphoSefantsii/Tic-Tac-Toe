import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';

const ResetButton: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { resetGame } = gameContext;

  return (
    <button className="reset-button" onClick={resetGame}>
      Reset
    </button>
  );
};

export default ResetButton;
