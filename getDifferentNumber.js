// Given an array of non negative integers, return the smallest non-negative integer
// which is not present inside the array
function getDifferentNumber(arr) {
  let aux = new Array(arr.length).fill(-1);
  for (const element of arr) {
    if (element < arr.length) {
      aux[element] = element;
    }
  }
  for (const [index, element] of aux.entries()) {
    if (element === -1) {
      return index;
    }
  }
  return arr.length;
}
