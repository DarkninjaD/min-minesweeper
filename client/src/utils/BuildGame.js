import GameCell from "../components/gameCell/gameCell";

const buildGame = ({ gridSize, bombFlagAmount }) => {
  const [rowLength, columnLength] = gridSize;
  const gameCells = rowLength * columnLength;

  const bombLocation = genBombLocation(bombFlagAmount, gameCells);

  const allCellData = [];
  const allCellComponent = [];
  const toTally = [];

  for (let cell = 0; cell < gameCells; cell++) {
    let isBomb = false;
    if (bombLocation.some((bombCell) => cell === bombCell)) {
      toTally.push(...findAllLocation(cell, gameCells, rowLength));
      isBomb = true;
    }
    allCellData.push({
      location: cell,
      bomb: isBomb,
      tally: 0,
    });
    allCellComponent.push(<GameCell key={cell} refObj={cell} />);
  }

  // console.log(toTally);
  toTally.forEach((location) => {
    addTally(allCellData[location]);
  });
  return [allCellComponent, allCellData];
};

const findAllLocation = (start, range, rowLength) => {
  let foundLocations = [];

  foundLocations.push(findLocation(start, "left", range, rowLength));
  foundLocations.push(findLocation(start, "right", range, rowLength));
  foundLocations.push(findLocation(start, "up", range, rowLength));
  foundLocations.push(findLocation(start, "down", range, rowLength));
  foundLocations.push(
    findLocation(
      findLocation(start, "up", range, rowLength),
      "left",
      range,
      rowLength
    )
  );
  foundLocations.push(
    findLocation(
      findLocation(start, "up", range, rowLength),
      "right",
      range,
      rowLength
    )
  );
  foundLocations.push(
    findLocation(
      findLocation(start, "down", range, rowLength),
      "left",
      range,
      rowLength
    )
  );
  foundLocations.push(
    findLocation(
      findLocation(start, "down", range, rowLength),
      "right",
      range,
      rowLength
    )
  );

  console.log(foundLocations);
  return foundLocations.filter((x) => {
    if (x === 0) {
      console.log("it's the zero!");
      console.log("this is", x > -1);
    }
    return x > -1;
  });
};

const findLocation = (start, direction, range, rowLength) => {
  const isLocationValid = (test) => {
    let error = false;
    // if (test === undefined) return error;
    if (test < 0) return error;
    if (test > range) return error;
    return test;
  };

  let valid;
  switch (direction) {
    case "left":
      valid = start - 1;
      if (isLocationValid(valid)) {
        return valid;
      }
      break;
    case "right":
      valid = start + 1;
      if (isLocationValid(valid)) {
        return valid;
      }
      break;
    case "up":
      valid = start + rowLength;
      if (isLocationValid(valid)) {
        return valid;
      }
      break;
    case "down":
      valid = start - rowLength;
      if (isLocationValid(valid)) {
        return valid;
      }
      break;
    default:
  }
};

const addTally = (obj) => {
  obj.tally += 1;
};

const genBombLocation = (totalBombs, range) => {
  const bombLocation = [];
  for (let bombCount = 0; bombCount < totalBombs; bombCount++) {
    bombLocation.push(Math.floor(Math.random() * (range - 1)));
  }
  return bombLocation;
};
export default buildGame;
