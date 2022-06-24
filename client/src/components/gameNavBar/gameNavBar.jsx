import React, { useState } from "react";
import styled from "styled-components";
import { BsFlagFill } from "react-icons/bs";
import { FcClock } from "react-icons/fc";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const GameNavBar = ({ label, startingFlagAmount }) => {
  // {label: string, action: functions, type: ?, goTo: string but format for url}
  const [flagAmount, setflagAmount] = useState(startingFlagAmount);
  const nav = useNavigate();
  const handleExit = () => {
    nav("/");
  };
  return (
    <GameNavBarStyle name={label}>
      <div>
        <Flag />
        <VLabels>{flagAmount}</VLabels>
      </div>
      <div>
        <Timer />
        <VLabels>Timer</VLabels>
      </div>
      <Exit onClick={() => handleExit()} />
    </GameNavBarStyle>
  );
};

const GameNavBarStyle = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;
const VLabels = styled.label`
  vertical-align: middle;
  display: inline-block;
  margin: 8px;
`;

const Flag = styled(BsFlagFill)`
  fill: red;
  vertical-align: middle;
  display: inline-block;
`;
const Timer = styled(FcClock)`
  fill: red;
  vertical-align: middle;
  display: inline-block;
`;

const Exit = styled(RiCloseCircleFill)`
  fill: "#AFAFAF";
`;

export default GameNavBar;
