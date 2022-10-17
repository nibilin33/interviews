/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let map = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return nums[i];
    } else {
      map.add(nums[i]);
    }
  }
};
// @lc code=end
