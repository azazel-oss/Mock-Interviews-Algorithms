// Make brick GOAL inches long, given small brick is 1 inch long and large brick is 5 inches
// long

function makeBricks(small, large, goal) {
  if (goal - large * 5 >= 0) {
    return goal - large * 5 <= small;
  } else {
    return goal % 5 <= small;
  }
}

console.log(makeBricks(1, 4, 12)); // false
console.log(makeBricks(3, 2, 8)); // true
