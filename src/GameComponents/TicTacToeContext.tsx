import React, { createContext, useState, ReactNode } from 'react';

interface GameContextProps {
  squares: string[];
  setSquares: React.Dispatch<React.SetStateAction<string[]>>;
  currentPlayer: string;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  checkWinner: (squares: string[]) => string | null;
  resetGame: () => void;
}

const initialSquares = Array(9).fill("");

const GameContext = createContext<GameContextProps | undefined>(undefined);

const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [squares, setSquares] = useState(initialSquares);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const checkWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const [firstIndex, secondIndex, thirdIndex] of lines) {
      if (squares[firstIndex] && squares[firstIndex] === squares[secondIndex] && squares[firstIndex] === squares[thirdIndex]) {
        return squares[firstIndex];
      }
    }

    return null;
  };

  const resetGame = () => {
    setSquares(initialSquares);
    setCurrentPlayer('X');
  };

  return (
    <GameContext.Provider value={{ squares, setSquares, currentPlayer, setCurrentPlayer, checkWinner, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
