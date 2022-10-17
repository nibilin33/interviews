/**
 * @param {number[][]} grid
 * @return {number}
 */
// 设 f(i, j)f(i,j) 为从棋盘左上角走至单元格 (i ,j)(i,j) 的礼物最大累计价值，
// 易得到以下递推关系：f(i,j)f(i,j) 等于 f(i,j-1)f(i,j−1) 和 f(i-1,j)f(i−1,j) 中的较大值加上当前单元格礼物价值
// grid(i,j)grid(i,j) 。

// f(i,j) = max(grid(i,j-1),grid(i-1,j)) + grid[i,j]
var maxValue = function(grid) {
  let n = grid.length,
    m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        continue;
      }
      if (i == 0) {
        grid[i][j] = grid[i][j] + grid[i][j - 1];
      } else if (j == 0) {
        grid[i][j] = grid[i][j] + grid[i - 1][j];
      } else {
        grid[i][j] = grid[i][j] + Math.max(grid[i][j - 1], grid[i - 1][j]);
      }
    }
  }
  return grid[n - 1][m - 1];
};
