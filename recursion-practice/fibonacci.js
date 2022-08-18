function fibonacci(i) {
  if (i === 1 || i === 0) return i;
  return fibonacci(i - 1) + fibonacci(i - 2);
}

console.log(fibonacci(6));

// Use recursion to find the fibonacci series
