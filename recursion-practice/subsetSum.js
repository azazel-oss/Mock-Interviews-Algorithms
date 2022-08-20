// return the array of sum of individual subsets of an array
function subsetSum(array) {
  let res = [];
  let sum = 0;
  helper(0, array, sum, res);

  return res.sort((a, b) => a - b);
}

function helper(index, array, sum, result) {
  if (index >= array.length) {
    result.push(sum);
    return;
  }
  // condition where the element is picked in the subset
  helper(index + 1, array, sum + array[index], result);
  // condition where the element is not picked in the subset
  helper(index + 1, array, sum, result);
}

console.log(subsetSum([3, 1, 4]));
