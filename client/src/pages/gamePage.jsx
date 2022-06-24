import React from "react";
import { useAppContext } from "../context/appContext";
import styled from "styled-components";
import GameNavBar from "../components/gameNavBar/gameNavBar";
import GameGrid from "../components/gameGrid/gameGrid";

const GamePage = () => {
  const { difficult } = useAppContext();
  return (
    <GamePageLayout data-testid="Game Page">
      <GameNavBar startingFlagAmount={difficult.bombFlagAmount} />
      <GameGrid />
    </GamePageLayout>
  );
};

const GamePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 92vh;
`;

export default GamePage;
