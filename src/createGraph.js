import createVertex from './createVertex.js';

const createGraph = () => {
  const buildGraph = () => {
    const board = [];
    const cols = 8;
    const rows = 8;
    

    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const vertex = createVertex(y, x);
        board.push(vertex);
      }
    }

    return board;
  };
  const adjacentList = buildGraph();

  return { adjacentList };
};

export default createGraph;
