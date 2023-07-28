import React from 'react';
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import ButtonDefault from '../shared/ButtonDefault';

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 2fr)
`
const List = styled.ul`
    width: 25vw;
    height: 50vh;
    background-color: grey;
    margin-right: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    text-align: center;
    list-style: none;
    padding-inline-start: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    li {
        margin: 0px;
    }
`

export interface Games {
    id: number,
    title: string,
    year: number,
    imgUrl: string,
    shortDescription: string
}

interface Props {
    Games: Games[]
}

const Game: React.FC<Props> = ({ Games }) => {
 return (
    <Section>
        {Games.map((itemGames) => {
            return (
                <List key={itemGames.id}>
                    <li><img style={{width: '205px', height: '205px', borderRadius: '5px'}} src={itemGames.imgUrl} alt="imagem do jogo"/></li>
                    <li style={{textTransform: 'uppercase', fontSize: '20px', fontWeight: 'bold'}}>{itemGames.title}</li>
                    <li>{}</li>
                    <li><p>{itemGames.year}</p></li>
                    <li>{itemGames.shortDescription}</li>
                    <ButtonDefault link_url={`/games/search/${itemGames.id}`} text={"Clicar"} style={{width: "100px"}}/>
                </List>
            )
        })}
    </Section>
 )
}

export default Game;