import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game, { Games } from './components/Game';

function App() {
  const [dataGame, setDataGame] = useState<Games[]>([]);
  
  async function getGames() {
    try {
      const result = await axios.get<Games[]>('http://localhost:8080/games')
      setDataGame(result.data)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getGames();
  }, [])

  console.log(dataGame);

  return (
    <div className="App">
      <Game Games={dataGame}/>
    </div>
  );
}

export default App;
