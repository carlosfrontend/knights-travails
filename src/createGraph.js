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
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].neighborIndexes.length; j += 1) {
        board[i].neighbors.push(board[board[i].neighborIndexes[j]]);
      }
    }
    return board;
  };
  const graph = buildGraph();
  return graph;
};

export default createGraph;
