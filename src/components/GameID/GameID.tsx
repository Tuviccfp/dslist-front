import React from "react";
import styled from "styled-components";

const List = styled.section`
  border: 1px solid black;
`;

export interface GameID {
  id: number;
  title: string;
  genre: string;
  platforms: string;
  score: number;
  year: number;
  imgUrl: string;
  longDescription: string;
}

const GameID: React.FC<GameID> = ({
  id,
  title,
  genre,
  platforms,
  score,
  year,
  imgUrl,
  longDescription,
}) => {
  return (
    <List>
      <ul key={id}>
        <li>
          <img
            src={`${imgUrl}`}
            alt={`imagem do jogo ${title}`}
          />
        </li>
        <li>{title}</li>
        <li>{genre}</li>
        <li>{platforms}</li>
        <li>{score}</li>
        <li>{year}</li>
        <li>{longDescription}</li>
      </ul>
    </List>
  );
};

export default GameID;
