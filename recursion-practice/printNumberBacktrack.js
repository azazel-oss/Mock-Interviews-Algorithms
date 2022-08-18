function printNumbersBacktrack(i, n) {
  if (i < 1) return;
  printNumbersBacktrack(i - 1, n);
  console.log(i);
}

printNumbersBacktrack(5, 5);

// Print numbers using recursion and backtracking in ascending order

function printDescendingBacktrack(i, n) {
  if (i > n) return;
  printDescendingBacktrack(i + 1, n);
  console.log(i);
}

printDescendingBacktrack(1, 5);

// Print numbers in descending order using backtracking and recursion
