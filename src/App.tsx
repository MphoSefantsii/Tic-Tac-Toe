//import React from 'react';
import './App.css';
import { GameProvider } from './GameComponents/TicTacToeContext';
import Header from './GameComponents/Header';
import Board from './GameComponents/Board';
import CheckWinner from './GameComponents/CheckWinner';
import ResetButton from './GameComponents/ResetGame';

function App() {
  return (
    <GameProvider>
      <Header />
      <Board />
      <CheckWinner />
      <ResetButton/>
    </GameProvider>
  );
}

export default App;
