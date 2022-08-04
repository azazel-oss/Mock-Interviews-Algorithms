// Count how many sundays were there on the first day of every month in a century(1901-2000)
function getSundaysOnFirstDay(year) {
  let date = new Date(year, 0, 1);
  let result = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    console.log(date);
    if (date.getDay() === 0) result += 1;
  }
  return result;
}

let result = 0;

for (let j = 1901; j <= 2000; j++) {
  result += getSundaysOnFirstDay(j);
}
console.log(result);
