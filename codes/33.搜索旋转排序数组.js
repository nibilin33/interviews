/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 找到没有按升序的临界点，判断查找区间,然后用二分查找法
var search = function(nums, target) {
  let start = 0,
    end = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > nums[i + 1]) {
      if (nums[i] > target) {
        start = i + 1;
      }
      if (nums[i] < target) {
        end = i;
      }
      break;
    }
  }
  function midSearch(i, j) {
    let start = i,
      end = j;
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
  }
  return midSearch(start, end);
};
// @lc code=end
