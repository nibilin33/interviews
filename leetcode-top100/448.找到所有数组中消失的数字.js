/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 开辟一个n+1的数组，i就是范围，遍历数组，n[nums] = 1, 把未填充的过滤出来
var findDisappearedNumbers = function(nums) {
  const n = nums.length + 1;
  let ar = Array.from({ length: n });
  for (let i = 1; i < n; i++) {
    ar[nums[i - 1]] = 1;
  }
  let result = [];
  ar.forEach((it, index) => {
    if (it !== 1 && index > 0) {
      result.push(index);
    }
  });
  return result;
};
// @lc code=end
