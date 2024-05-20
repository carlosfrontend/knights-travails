import createGraph from './createGraph.js';

const knightMoves = (start, end) => {
  // Create the chess board
  const graph = createGraph();
  /* Calculates the index of the horse's initial position based on the coordinates */
  const startIndex = start[0] + 8 * start[1];
  /* Calculates the index of the horse's final position based on the coordinates */
  const endIndex = end[0] + 8 * end[1];
  // Get the starting node from the graph
  const startNode = graph[startIndex];
  // Gets the final node from the graph
  const endNode = graph[endIndex];
  // Sets the message as an empty string
  let msg = '';
  // Shows error when the initial or final position are incorrect
  if (
    !startNode ||
    start[0] > 7 ||
    start[0] < 0 ||
    start[1] > 7 ||
    start[1] < 0
  ) {
    console.log('Invalid initial position!');
    return null;
  }
  if (
    !endNode ||
    end[0] > 7 ||
    end[0] < 0 ||
    end[1] > 7 ||
    end[1] < 0
  ) {
    console.log('Invalid final position!');
    return null;
  }
  // Initialize the queue with the initial node
  const queue = [startNode];
  // Initialize visited with the initial node
  const visited = [startNode];
  // Initialize the parentArray to trace the path with 64 null values
  const parentArray = new Array(64).fill(null);
  // Initialize the moves counter to zero
  let nMoves = 0;

  while (queue.length > 0) {
    /* As long as the queue is not empty, the current node is equal to the node removed from the queue. */
    const current = queue.shift();
    // If the current node is equal to the final node, the loop is exited.
    if (current === endNode) {
      break;
    }
    /* Otherwise it iterates over all the neighbors of the current node, obtaining the current neighbor and
    storing it in a neighbor variable */
    for (let i = 0; i < current.neighbors.length; i += 1) {
      const neighbor = current.neighbors[i];
      // If the neighbor has not been visited
      if (!visited.includes(neighbor)) {
        // It pushes it to the queue
        queue.push(neighbor);
        // Marks it as visited
        visited.push(neighbor);
        // Registers the current node as the parent of the neighbor
        parentArray[neighbor.index] = current;
      }
    }
  }
  // Initialize the path array
  const path = [];
  // Start tracing the route from the end node
  let current = endNode;
  // Trace path from end node to start node using parentArray
  while (current) {
    // Add the current coordinates of the node to the route
    path.unshift(current.coords);
    // The current node is now the parent of the current node
    current = parentArray[current.index];
  }
  /* Calculate the number of movements made by subtracting 1 from the length of the route */
  nMoves = path.length - 1;
  // Checks if a valid route was found and constructs the corresponding message
  if (path) {
    msg = `=> You made it in ${nMoves} moves!  Here's your path: ${JSON.stringify(
      path
    )}`;
  } else {
    msg = 'No valid path found !';
  }

  return msg;
};

export default knightMoves;
