import React, { useContext } from 'react';
import { GameContext } from './TicTacToeContext';
import Square from './Square';

interface RowProps {
  rowIndex: number;
}

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    return null;
  }

  const { squares } = gameContext;

  return (
    <div className="row">
      {[0, 1, 2].map(colIndex => {
        const index = rowIndex * 3 + colIndex;
        return <Square key={index} index={index} value={squares[index]} />;
      })}
    </div>
  );
};

export default Row;
