/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  function backtrack(used, list) {
    if (nums.length == list.length) {
      let copy = JSON.parse(JSON.stringify(list));
      result.push(copy);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      // 相同数字剪枝
      // !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
      if (used[i] || (i > 0 && !used[i - 1] && nums[i] == nums[i - 1])) {
        continue;
      }
      list.push(nums[i]);
      used[i] = true;
      backtrack(used, list);
      list.pop();
      used[i] = false;
    }
  }
  backtrack([], []);
  return result;
};
// console.log(permuteUnique([3,3,0,3]));
// @lc code=end
