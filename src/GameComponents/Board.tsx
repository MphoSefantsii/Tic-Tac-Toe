import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';
import Row from './Row';

const Board: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  return (
    <div className="board">
      {[0, 1, 2].map(rowIndex => (
        <Row key={rowIndex} rowIndex={rowIndex} />
      ))}
    </div>
  );
};

export default Board;
