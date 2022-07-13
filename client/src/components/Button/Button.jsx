import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = ({ label, onClick, type, goTo }) => {
  const nav = useNavigate();

  const doActions = async () => {
    if (onClick) {
      console.log("running onclick");
      await onClick();
    }

    if (goTo) {
      nav(goTo);
    }
  };
  return (
    <ButtonStyled type="button" name={label} onClick={doActions}>
      {label}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button``;
export default Button;
