import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';

const Header: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { currentPlayer } = gameContext;

  return (
    <div className="header">
      <h1>Tic-Tac-Toe</h1>
      <p>Current Player: {currentPlayer}</p>
    </div>
  );
};

export default Header;
