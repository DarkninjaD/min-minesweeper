import React from "react";
import Button from "../components/Button/Button";
import { useAppContext } from "../context/appContext";
import setUpGame from "../helper/setUpGame";

const MainPage = () => {
  const { difficult, player } = useAppContext();

  const handleStartGame = setUpGame(difficult, player);

  return (
    <div>
      <h1>Mine Sweeper</h1>
      <Button label="Start Game" onClick={handleStartGame} goTo="/game" />
      <Button label="Login" goTo="/login" />
      <Button label="Profile" goTo="/profile" />
      <Button label="Leader Board" goTo="/leaderboard" />
    </div>
  );
};
export default MainPage;
