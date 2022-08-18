function sudokuSolve(board) {
  return solve(board);
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let k = 1; k < 10; k++) {
          if (isValid(board, i, j, k)) {
            board[i][j] = "" + k;
            if (solve(board)) {
              return true;
            }
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    // row check
    if (board[i][col] === "" + value) return false;

    // col check
    if (board[row][i] === "" + value) return false;

    // box check
    if (board[row - (row % 3) + (i % 3)][col - (col % 3) + Math.floor(i / 3)])
      return false;

    return true;
  }
}
