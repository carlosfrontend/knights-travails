## KNIGHTS TRAVAILS PSEUDOCODE
1. Create the chess board

2. Calculate the index of the horse's initial position based on the coordinates

3. Calculate the index of the horse's final position based on the coordinates

4. Gets the initial node from the graph.

5. Gets the final node from the graph.

6. Set the message as an empty string

7. If the initial node is not defined, the console displays "Invalid initial node!" and returns null,
   If not, it checks to see if the end node is not defined and in that case it shows in the console "End node
   invalid!" and returns null.
8. Initialize the queue with the starting node

9. Initialize the visited array with the initial node

10. Initialize the parentArray to trace the path with 64 null slots

11. Initialize the nMoves movement counter to 0

12. As long as the queue is not empty, the current node is equal to what is leaving the queue (Dequeue)

    If the current node is equal to the final node, it stops the execution of the function,
    Otherwise it iterates over all the neighbors of the current node, obtaining the current neighbor and
    storing it in a neighbor variable

    (inside the for ) If the visited array does not include the neighbor, push the neighbor to the queue (Enqueue),
    marks the neighbor as visited by also pushing it to the visited array,
    registers the current node as the parent of the neighbor (parentArray[neigbor.index] = current)
    Get out of condition
    Exit the for loop
    Exit the while loop

13. Initialize the path array.

14. Start tracing the path from the end node let (let current = endNode)

15. Plot path from end node to start node using parentArray
    As long as the current node is not null
    Add the current coordinates of the node to the path (path.unshiftcurrent.coords))
    Moves to the parent of the current node current = parentArray[current.name]
    You get out of the loop
16. Calculate the number of movements made by subtracting 1 from the length of the route

17. Check if a valid route was found and construct the corresponding message
    if(path) {msg = ''} else {msg = ''}.
18. Return the message.
