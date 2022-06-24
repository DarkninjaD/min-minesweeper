import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [gameCells, setGameCells] = useState([
    {
      location: 0,
      bomb: false,
      tally: 0,
    },
  ]);

  const [difficult, setDifficult] = useState({});
  // inside said object has {bombFlagAmount: #, gridSize: #}
  const [player, setPlayer] = useState("readyPlayerOne");

  const values = {
    gameCells,
    difficult,
    player,
  };

  const setters = {
    setGameCells,
    setDifficult,
    setPlayer,
  };

  return (
    <AppContext.Provider
      value={{
        values,
        setters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
