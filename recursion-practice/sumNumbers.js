function sumNumbersInplace(i, sum) {
  if (i < 1) return;
  sum[0] += i;
  sumNumbersInplace(i - 1, sum);
}

let result = [0];
sumNumbersInplace(5, result);
console.log(result[0]);

// Create parameters and use referenced parameters to change the value of the result

function sumWithReturn(val) {
  if (val < 1) return 0;
  return val + sumWithReturn(val - 1);
}

console.log(sumWithReturn(4));
