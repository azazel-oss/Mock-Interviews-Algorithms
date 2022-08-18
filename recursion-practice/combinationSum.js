// Combination sum, return all unique sub sequences of given array where sum is equal to target,
// any element can be used multiple times

function combinationSum(index, arr, target, stack) {
  if (target === 0) {
    results.push([...stack]);
    return;
  }
  if (index >= arr.length || target < 0) {
    return;
  }
  // if we are picking, we subtract from target but do not increase our index
  stack.push(arr[index]);
  combinationSum(index, arr, target - arr[index], stack);
  // if we are not picking we increase the index and move on
  stack.pop();
  combinationSum(index + 1, arr, target, stack);
}

let results = [];
let stack = [];

combinationSum(0, [2, 3, 6, 7], 7, stack);

console.log(results);

// c() [2,3,6,7] => 7
