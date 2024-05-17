const createVertex = (x, y) => {
  const coords = [x, y];
  const neightbourIndexes = [];
  const neightbour = [];
  const name = x + 8 * y;
  const knightMovements = [
    [2, -1],
    [2, 1],
    [1, -2],
    [1, 2],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1],
  ];

  const isValidSquare = (xCoord, yCoord) => {
    if (xCoord >= 0 && xCoord < 8 && yCoord >= 0 && yCoord < 8) {
      return true;
    }
    return false;
  };

  for (let i = 0; i < knightMovements.length; i += 1) {
    const newX = x + knightMovements[i][0];
    const newY = y + knightMovements[i][1];

    if (isValidSquare(newX, newY)) {
      neightbourIndexes.push(newX + 8 * newY);
    }
  }

  return { coords, neightbour, neightbourIndexes, name };
};

export default createVertex;
