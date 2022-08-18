function factorialParameterized(i, fact) {
  if (i < 1) return;
  fact[0] *= i;
  factorialParameterized(i - 1, fact);
}

let result = [1];
factorialParameterized(5, result);
console.log(result[0]);

// Using parameters and changing the referenced value

function factorial(val) {
  if (val < 1) return 1;
  return val * factorial(val - 1);
}

console.log(factorial(6));
