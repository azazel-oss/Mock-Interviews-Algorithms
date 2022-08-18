function combinationSum(index, arr, target, stack) {
  if (target === 0) {
    results.push([...stack.sort((a, b) => a - b)]);
    return;
  }
  if (index >= arr.length) return;
  stack.push(arr[index]);
  combinationSum(index + 1, arr, target - arr[index], stack);
  stack.pop();
  combinationSum(index + 1, arr, target, stack);
}

let results = [];

let stack = [];

combinationSum(
  0,
  [10, 1, 2, 7, 6, 1, 5].sort((a, b) => a - b),
  8,
  stack
);

results.sort((a, b) => a.length - b.length);

for (let i = 1; i < results.length; i++) {
  if (isEqualArray(results[i], results[i - 1])) results.splice(i, 1);
}

console.log(results);

function isEqualArray(leftArray, rightArray) {
  if (leftArray.length !== rightArray.length) return false;

  for (let i = 0; i < leftArray.length; i++) {
    if (leftArray[i] !== rightArray[i]) return false;
  }
  return true;
}
