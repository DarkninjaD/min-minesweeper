import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context/appContext";

const GameCell = ({ refObj }) => {
  const [clicked, setClicker] = useState(false);
  const { gameCells } = useAppContext();
  // console.log(gameCells[refObj]);
  const bombCheck = (e) => {
    setClicker(true);
    if (!gameCells[refObj].bomb) {
      // bombLeft(refObj.location)
      // bombRight(refObj.location)
      // bombUp(refObj.location)
      // bombDown(refObj.location)
    }
  };
  useEffect(() => {
    setClicker(true);
  });

  return (
    <>
      {clicked ? (
        gameCells[refObj].bomb ? (
          <GameCellBomb />
        ) : (
          <GameCellSafe> {gameCells[refObj].tally}</GameCellSafe>
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
