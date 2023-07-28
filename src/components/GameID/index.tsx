import { useEffect, useState } from "react";
import GameForID, { GameID } from "./GameID";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewGameID: React.FC = () => {
  const [data, setData] = useState<GameID | null>(null);
  const { id } = useParams<{ id: string }>();

  //GET API
  const getGameID = async () => {
    try {
      const result = await axios.get<GameID>(
        `http://localhost:8080/games/search-${id}`
      );
      setData(result.data);
    } catch (error) {
      console.log("Erro ao capturar");
    }
  };

  useEffect(() => {
    getGameID();
  }, [id]);

  return (
    <section>
      {data && (
        <GameForID
          id={data.id}
          title={data.title}
          genre={data.genre}
          platforms={data.platforms}
          score={data.score}
          year={data.year}
          imgUrl={data.imgUrl}
          longDescription={data.longDescription}
        />
      )}
    </section>
  );
};

export default ViewGameID;
