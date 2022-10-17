/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0,
    end = nums.length - 1;
  let mid = parseInt((start + end) / 2);
  if (nums[mid] === target) {
    return mid;
  }
  let targetIndex = -1;
  while (start < end) {
    if (nums[mid] > target) {
      end = mid - 1;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    }
    mid = parseInt((start + end) / 2);
    if (nums[mid] === target) {
      targetIndex = mid;
      break;
    }
  }
  return targetIndex;
};
// @lc code=end
// [5]\n5
// [2,5]\n5
