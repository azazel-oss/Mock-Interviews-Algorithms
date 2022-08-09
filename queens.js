// Place n queens on a n x n sized board, such that no queen attacks any other queen

// For every row, there has to be a unique queen, and that queen can't exist at a column,
// a positive diagonal, or a negative diagonal, where another queen is already placed.

// Hence we create threee new sets for all these places to keep track of them
function nQueens(n) {
  let col = new Set();
  let posDiagonal = new Set();
  let negDiagonal = new Set();

  let board = [];
  let results = [];

  // Populate a new empty board with "."
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = 0; j < n; j++) {
      temp.push(".");
    }
    board.push(temp);
  }

  // A backtrack function which checks back if there is no way forward
  function backTrack(rowIndex) {
    if (rowIndex === n) {
      // last row queen has been successfully placed, hence add the board to the result
      results.push(presentableBoard(board));
      return;
    }

    // Traverse column wise per row so you have access to both rowIndex and columnIndex
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // Case if the square is being attacked by another queen
      if (
        col.has(columnIndex) ||
        posDiagonal.has(rowIndex + columnIndex) ||
        negDiagonal.has(rowIndex - columnIndex)
      ) {
        continue;
      }

      // If square not attacked then place queen here
      col.add(columnIndex);
      posDiagonal.add(rowIndex + columnIndex);
      negDiagonal.add(rowIndex - columnIndex);
      board[rowIndex][columnIndex] = "Q";

      // Go to the next row since queen on this row has been placed successfully
      backTrack(rowIndex + 1);

      // Backtracking taking place so revert all the changes that you made the last iteration
      col.delete(columnIndex);
      posDiagonal.delete(rowIndex + columnIndex);
      negDiagonal.delete(rowIndex - columnIndex);
      board[rowIndex][columnIndex] = ".";
    }
  }
  backTrack(0);
  return results;
}

function presentableBoard(board) {
  let copy = [];
  for (const element of board) {
    copy.push(element.join(""));
  }
  return copy;
}

console.log(nQueens(8));
