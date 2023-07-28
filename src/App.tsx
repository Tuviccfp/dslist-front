import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Game, { Games } from './components/Games';
import styled from 'styled-components';
import ButtonDefault from './components/shared/ButtonDefault';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-size: 28px;
  }

  p {
    text-transform: uppercase;
    font-size: 20px;
  }
`

function App() {
  const [dataGame, setDataGame] = useState<Games[]>([]);
  
  //GET API
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

  dataGame.map((item) => {
    console.log(item.imgUrl);
  })

  return (
    <Home className="App">
      <h2>Lista de Jogos</h2>
      <p>Uma lista onde contém os melhores jogos que já joguei.</p>
      <ButtonDefault text={'Adicionar novo'} style={{backgroundColor: 'tomato', width: '150px'}} link_url='/save-games'/>
      <Game Games={dataGame}/>
    </Home>
  );
}

export default App;