/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 基于快速排序的选择方法,nums[n-k];
var findKthLargest = function(nums, k) {
  function partion(start, end) {
    let pivot = nums[start];
    let mark = start;
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] < pivot) {
        mark++;
        let tmp = nums[mark];
        nums[mark] = nums[i];
        nums[i] = tmp;
      }
    }
    // 最后把基准移动到mark位置
    nums[start] = nums[mark];
    nums[mark] = pivot;
    return mark;
  }
  function quickSort(start, end) {
    if (start >= end) {
      return;
    }
    let markIndex = partion(start, end);
    quickSort(start, markIndex - 1);
    quickSort(markIndex + 1, end);
  }
  quickSort(0, nums.length - 1);
  return nums[nums.length - k];
};
// @lc code=end
// [3,2,1,5,6,4]\n2
// [2,1]\n2
