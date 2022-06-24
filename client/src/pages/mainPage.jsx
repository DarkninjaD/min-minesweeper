import React from "react";
import Button from "../components/Button/Button";
const MainPage = () => {
  const handleStartGame = () => {
    console.log("ding");
  };
  const handleUnderDev = () => {
    alert("Under Dev");
  };
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
