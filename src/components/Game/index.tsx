import React from "react";
import styled from "styled-components";

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    display: grid;
    
    align-items: center;
`
const List = styled.ul`
    border: 1px solid black;
    text-align: center;
    list-style: none;
    li {
        margin: 0px;
    }
`

export interface Games {
    id: number,
    title: string,
    year: number,
    img_url: string,
    short_description: string
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
                    <li>{itemGames.img_url}</li>
                    <li>{itemGames.title}</li>
                    <li><p>{itemGames.year}/</p></li>
                    <li>{itemGames.short_description}</li>
                </List>
            )
        })}
    </Section>
 )
}

export default Game;