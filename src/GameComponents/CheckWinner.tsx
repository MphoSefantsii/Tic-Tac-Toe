import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './TicTacToeContext';

const CheckWinner: React.FC = () => {
  const gameContext = useContext(GameContext);
  const [result, setResult] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (gameContext) {
      const result = gameContext.checkWinner(gameContext.squares);
      if (result) {
        setResult(result);
        if (result !== "Draw") {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
      } else {
        setResult(null);
      }
    }
  }, [gameContext]);

  if (!gameContext) {
    return null;
  }

  return (
    <div>
      <div className={`winner-popup ${result ? 'visible' : ''}`}>
        {result === "Draw" ? "It's a Draw!" : result ? `Winner: ${result}` : ''}
      </div>
      {showConfetti && result !== "Draw" && (
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
