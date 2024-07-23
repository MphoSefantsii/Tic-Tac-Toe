import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './TicTacToeContext';

const CheckWinner: React.FC = () => {
  const gameContext = useContext(GameContext);
  const [winner, setWinner] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (gameContext) {
      const winner = gameContext.checkWinner(gameContext.squares);
      if (winner) {
        setWinner(winner);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
      } else {
        setWinner(null);
      }
    }
  }, [gameContext]);

  if (!gameContext) {
    return null;
  }

  return (
    <div>
      <div className={`winner-popup ${winner ? 'visible' : ''}`}>
        {winner ? `Winner: ${winner}` : ''}
      </div>
      {showConfetti && (
        <div className="confetti">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckWinner;
