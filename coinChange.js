// Tell the fewest number of coins required to obtain a certain given amount

function coinChange(coins, amount) {
  // Using a bottom top approach with dynamic programming

  // Initializing dp array with max amount
  const dp = new Array(amount + 1).fill(amount + 1);

  // Takes zero coins to have 0 amount
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // If (i - coin < 0), it can't be our solution.
      if (i - coin >= 0) {
        // Finding min value for every amount bottom top for every coin
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  // return amount index for the answer and if it's not updated then it means that there
  // is no way to produce that amount from the given coin denominations
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}

console.log(coinChange([1, 3, 4, 5], 7));
