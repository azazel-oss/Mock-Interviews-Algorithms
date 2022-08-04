// Given time slots for two people, you have to find if there is some time where their slots
// overlap for some given duration, then return the time slot

function timePlanner(slotsA, slotsB, duration) {
  let indexA = 0;
  let indexB = 0;
  while (indexA < slotsA.length && indexB < slotsB.length) {
    let currentA = slotsA[indexA];
    let currentB = slotsB[indexB];
    let maxInitialTime = Math.max(currentA[0], currentB[0]);
    let minFinalTime = Math.mix(currentA[1], currentB[1]);
    if (minFinalTime - maxInitialTime >= duration) {
      return [maxInitialTime, maxInitialTime + duration];
    }
    if (currentA[1] > currentB[1]) {
      indexB++;
    } else {
      indexA++;
    }
  }
  return [];
}
