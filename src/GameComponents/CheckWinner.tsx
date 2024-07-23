import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './TicTacToeContext';

const CheckWinner: React.FC = () => {
  const gameContext = useContext(GameContext);

  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (gameContext) {
      const winner = gameContext.checkWinner(gameContext.squares);
      setWinner(winner);
    }
  }, [gameContext]);

  if (!gameContext) {
    return null;
  }

  return (
    <div className={`winner ${winner ? 'visible' : ''}`}>
      {winner ? `Winner: ${winner}` : ''}
      
    </div>
  );
};

export default CheckWinner;
