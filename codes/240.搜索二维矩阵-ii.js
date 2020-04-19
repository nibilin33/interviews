/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 搜索范围缩小，如果target大于当前数值，范围就从这个数值的右边区域查找
//小于就从左边区域查找
var searchMatrix = function(matrix, target) {
  let m = matrix.length;
  if (m === 0) {
    return false;
  }
  let n = matrix[0].length;
  if (n === 0) {
    return false;
  }
  let i = 0,
    j = n - 1;
  while (i <= m - 1 && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};
// var matrix = [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ];
// var matrix = [
//   [1, 4, 7, 11, 15],
//   [2, 5, 8, 12, 19],
//   [3, 6, 9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ];
// var result = searchMatrix(matrix, 20);
// console.log(result);
// @lc code=end
