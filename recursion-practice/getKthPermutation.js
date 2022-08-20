/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let set = [];
  let stack = [];
  let result = [];

  for (let i = 0; i < n; i++) {
    set.push(i + 1);
  }
  helper(0, set, stack, result);
  console.log(result);
};

function helper(index, set, stack, result) {
  if (index >= set.length) {
    result.push([...stack]);
    return;
  }

  for (let i = index; i < set.length; i++) {
    swap(i, index, set);
    stack.push(set[i]);
    helper(i + 1, set, stack, result);
    stack.pop();
  }
}

function swap(left, right, arr) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

getPermutation(3, 2);
