import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const GameCell = ({ refObj }) => {
  const [clicked, setClicker] = useState(false);
  const { setGameCells, gameCells } = useAppContext();
  const bombCheck = (e) => {
    setClicker(true);
    if (!refObj.bomb) {
      // bombLeft(refObj.location)
      // bombRight(refObj.location)
      // bombUp(refObj.location)
      // bombDown(refObj.location)
    }
  };

  return (
    <>
      {clicked ? (
        refObj.bomb ? (
          <GameCellBomb />
        ) : (
          <GameCellSafe> {refObj.tally}</GameCellSafe>
        )
      ) : (
        <GameCellHidden onClick={(e) => bombCheck(e)} />
      )}
    </>
  );
};

export default GameCell;
const GameCellHidden = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 64px;
  height: 64px;
  background-color: black;
`;

const GameCellBomb = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 64px;
  height: 64px;
  background-color: #ff0000;
`;

const GameCellSafe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  width: 64px;
  height: 64px;
  background-color: #090761;
`;
