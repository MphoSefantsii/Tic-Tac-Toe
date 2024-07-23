import React, { createContext, useState, ReactNode } from 'react';

interface GameContextProps {
  squares: string[];
  setSquares: React.Dispatch<React.SetStateAction<string[]>>;
  currentPlayer: string;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  checkWinner: (squares: string[]) => string | null;
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

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  };

  return (
    <GameContext.Provider value={{ squares, setSquares, currentPlayer, setCurrentPlayer, checkWinner }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
