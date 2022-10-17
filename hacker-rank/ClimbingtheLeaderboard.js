const fs = require("fs");
const testcase = fs
  .readFileSync("./climbingLeaderboard.txt")
  .toString()
  .split("\n");
/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 *  return int[m]: the player's rank after each new score
 */
// same number share the same rank
// player has order
// Time limit exceeded when number > 100000
function climbingLeaderboard(ranked, player) {
  // Write your code here
  let rankList = [];
  let all = Array.from(new Set(ranked));
  let rankMap = {};
  let i = 0;
  for (let j = player.length - 1; j >= 0; j--) {
    if (typeof rankMap[player[j]] === "undefined") {
      while (i < all.length && player[j] < all[i]) {
        i++;
      }
      rankMap[player[j]] = i + 1;
    }
    rankList.unshift(rankMap[player[j]]);
  }
  return rankList;
}
function climbingLeaderboard2(ranked, player) {
  const rankedCopy = [...new Set(ranked)];
  const result = [];
  let j = 0;
  for (let i = player.length - 1; i >= 0; i--) {
    while (j < rankedCopy.length && player[i] < rankedCopy[j]) {
      j++;
    }
    result.unshift(j + 1);
  }
  return result;
}
function main() {
  const ranked = [100, 90, 90, 80];
  // testcase[0];

  const player = [70, 80, 105];
  // testcase[1];

  const result = climbingLeaderboard(ranked, player);

  console.log(result);
}
main();
