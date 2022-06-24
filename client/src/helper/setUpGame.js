import React from "react";
import { easy, medium, hard, godMode } from "../utils/difficult";
import { useAppContext } from "../context/appContext";

const SetUpGame = (difficult, playerName) => {
  const { setDifficult, setPlayer } = useAppContext();
  return () => {
    if (Object.keys(difficult).length === 0) {
      setDifficult(easy);
      console.log("setting default difficult");
    }
    if (playerName === undefined) {
      setPlayer("readyPlayerOne");
      console.log("setting default player");
    }

    console.log("new game set");
  };
};

export default SetUpGame;
