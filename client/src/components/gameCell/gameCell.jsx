import { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const GameCell = ({ key }) => {
  const { setGameCells, gameCells } = useAppContext();

  // useEffect(() => {
  //   setGameCells((gameCells) => [
  //     ...gameCells,
  //     {
  //       location: key,
  //       bomb: false,
  //       tally: 0,
  //     },
  //   ]);
  // }, [key]);

  return <GameCellStyle />;
};

export default GameCell;
const GameCellStyle = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 64px;
  height: 64px;
  background-color: black;
`;
