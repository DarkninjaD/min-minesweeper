import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import GameCell from "../../components/gameCell/gameCell";
import { useEffect } from "react";

const GameGrid = () => {
  const { difficult, gameCells, setGameCells } = useAppContext();
  const GridContainer = styled.div`
    display: grid;
    min-width: 700px;
    min-height: 824px;
    grid-template-columns: repeat(${difficult.gridSize[1]}, 1fr);
    grid-gap: 8px;
    /* grid-template-columns: repeat(10, ); */
    grid-auto-rows: 8vh;
    /* grid-template-rows: ${difficult.gridSize[0]}; */
  `;

  const totalSize = difficult.gridSize[0] * difficult.gridSize[1];

  const allCells = [];
  const allGameCells = [];
  for (let i = 0; i < totalSize; i++) {
    allCells.push(<GameCell key={i + 1} />);
    allGameCells.push({
      location: i,
      bomb: false,
      tally: 0,
    });
  }
  useEffect(() => {
    setGameCells(allGameCells);
  }, []);

  return <GridContainer>{allCells.map((elm) => elm)}</GridContainer>;
};

export default GameGrid;
