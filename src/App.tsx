//import React from 'react';
import './App.css';
import { GameProvider } from './GameComponents/TicTacToeContext';
import Header from './GameComponents/Header';
import Board from './GameComponents/Board';
import CheckWinner from './GameComponents/CheckWinner';

function App() {
  return (
    <GameProvider>
      <Header />
      <Board />
      <CheckWinner />
    </GameProvider>
  );
}

export default App;
