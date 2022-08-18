function reverseArray(leftIndex, rightIndex, arr) {
  if (leftIndex >= rightIndex) return;
  [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
  reverseArray(leftIndex + 1, rightIndex - 1, arr);
}

let array = [1, 2, 3, 4, 5, 6, 7];
reverseArray(0, array.length - 1, array);
console.log(array);

// Use two pointers and at every iteration increase the left pointer
// and decrease the right pointer

function reverseWithOneIndex(i, arr) {
  if (i >= (arr.length - 1) / 2) return;
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  reverseWithOneIndex(i + 1, arr);
}

let array2 = [5, 4, 3, 2, 1];
reverseWithOneIndex(0, array2);
console.log(array2);

// Using two pointers but only one variable with recursion
