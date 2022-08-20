function getMaximumGold(grid) {
  let visited = [];

  for (let i = 0; i < grid.length; i++) {
    let temp = [];
    for (let j = 0; j < grid[i].length; j++) {
      temp.push(0);
    }
    visited.push(temp);
  }

  let results = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        results.push(helper(i, j, grid, visited, 0));
      }
    }
  }
  console.log(results);
  return Math.max(...results);
}

function helper(rowIndex, colIndex, grid, visited, sum) {
  if (rowIndex < 0 || rowIndex >= grid.length) return sum;
  if (colIndex < 0 || colIndex >= grid[0].length) return sum;
  if (visited[rowIndex][colIndex] === 1) return sum;
  if (grid[rowIndex][colIndex] === 0) return sum;

  sum += grid[rowIndex][colIndex];
  visited[rowIndex][colIndex] = 1;
  let res = Math.max(
    helper(rowIndex + 1, colIndex, grid, visited, sum),
    helper(rowIndex - 1, colIndex, grid, visited, sum),
    helper(rowIndex, colIndex + 1, grid, visited, sum),
    helper(rowIndex, colIndex - 1, grid, visited, sum)
  );
  visited[rowIndex][colIndex] = 0;
  sum -= grid[rowIndex][colIndex];

  return res;
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
