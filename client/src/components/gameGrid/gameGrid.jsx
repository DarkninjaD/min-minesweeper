import styled from "styled-components";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import buildGame from "../../utils/buildGame";

const GameGrid = () => {
  const { difficult, setGameCells } = useAppContext();
  const GridContainer = styled.div`
    display: grid;
    min-width: 700px;
    min-height: 824px;
    grid-template-columns: repeat(${difficult.gridSize[1]}, 1fr);
    grid-gap: 8px;
    grid-auto-rows: 8vh;
  `;

  const [allCellComponent, allCellData] = buildGame(difficult);

  useEffect(() => {
    setGameCells(allCellData);
    // NOTE: I don't know why but if add allCellData & setGameCells to the array list
    //  it will break the code as such eslint is disable for the next line.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <GridContainer>{allCellComponent.map((cell) => cell)}</GridContainer>;
};

export default GameGrid;
