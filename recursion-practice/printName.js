function printName(i, n) {
  if (i > n) return;
  console.log("Asad");
  printName(i + 1, n);
}

printName(1, 5);

// Print name n times using recursion
