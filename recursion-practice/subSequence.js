function subSequence(index, arr, results) {
  if (index >= arr.length) {
    console.log(results);
    return;
  }

  // For every element decide if it is picked or not, and then run the recursive functions
  results.push(arr[index]);
  subSequence(index + 1, arr, results);
  results.pop();
  subSequence(index + 1, arr, results);
}
let res = [];

let arr = [3, 1, 2];
subSequence(0, arr, res);
