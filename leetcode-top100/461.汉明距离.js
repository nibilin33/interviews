/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 1. 两个数转二进制，统计不同，以长的那个为主，不足的前补零
// 2. 两个异或，一样的会消掉，不一样是位置变成1，数有1的个数
var hammingDistance = function(x, y) {
  const diffent = x ^ y;
  return diffent
    .toString(2)
    .split("")
    .filter(i => i == 1).length;
};
// @lc code=end
