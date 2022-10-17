/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let dp = [];
  let mod = 1000000007;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  return dp[n];
};
