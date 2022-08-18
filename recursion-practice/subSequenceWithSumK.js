function subSequenceWithSumK(index, arr, varSum) {
  if (stack.reduce((a, b) => a + b, 0) === varSum) {
    console.log(stack);
  }
  if (index >= arr.length) {
    return;
  }

  // Decide if the element will be picked or not, then in every iteration check if sum is
  // equal to stack
  stack.push(arr[index]);
  subSequenceWithSumK(index + 1, arr, varSum);
  stack.pop();
  subSequenceWithSumK(index + 1, arr, varSum);
}

// f(index, arr, stack, sum) ->

let stack = [];
console.log(stack.reduce((a, b) => a + b, 0));
let array = [3, 1, 2];
subSequenceWithSumK(0, array, 3);

//-----------------------------------------------------------------------------//

// print only one result (make the function return a bool and put that function in if condition)

function oneSubSequenceWithSumK(index, arr, varSum) {
  if (stack.reduce((a, b) => a + b, 0) === varSum) {
    console.log(stack);
    return true;
  }
  if (index >= arr.length) {
    return false;
  }

  // Decide if the element will be picked or not, then in every iteration check if sum is
  // equal to stack
  stack.push(arr[index]);
  if (oneSubSequenceWithSumK(index + 1, arr, varSum)) return true;
  stack.pop();
  return oneSubSequenceWithSumK(index + 1, arr, varSum);
}

stack = [];

oneSubSequenceWithSumK(0, array, 3);

//----------------------------------------------------------------------------//

// Count the number of subsequences with sum K

function countSubSequenceWithSumK(index, arr, varSum) {
  if (stack.reduce((a, b) => a + b, 0) === varSum) {
    console.log(stack);
    return 1;
  }
  if (index >= arr.length) {
    return 0;
  }

  // Decide if the element will be picked or not, then in every iteration check if sum is
  // equal to stack
  stack.push(arr[index]);
  let left = countSubSequenceWithSumK(index + 1, arr, varSum);
  stack.pop();
  let right = countSubSequenceWithSumK(index + 1, arr, varSum);
  return left + right;
}

stack = [];
console.log(countSubSequenceWithSumK(0, [3, 1, 2], 3));
