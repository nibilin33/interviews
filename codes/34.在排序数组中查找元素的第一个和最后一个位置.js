/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [];
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (nums[mid] === target) {
      for (let i = start; i <= end; i++) {
        if (nums[i] === target) {
          result.push(i);
        }
      }
      break;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    }
  }
  if (result.length == 0) {
    return [-1, -1];
  }
  let startIndex = result.shift();
  if (result.length == 0) {
    return [startIndex, startIndex];
  }
  let endIndex = result.pop();
  return [startIndex, endIndex];
};
// @lc code=end
// [2,2]\n2
// [1,3]\n1
// [1]\n1
