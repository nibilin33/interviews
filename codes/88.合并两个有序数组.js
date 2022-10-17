/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  // 从尾部开始填充
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  //当 len1<0 时遍历结束，此时 nums2 中海油数据未拷贝完全，
  //将其直接拷贝到 nums1 的前面，最后得到结果数组
  nums1.splice(0, len2 + 1, ...nums2.splice(0, len2 + 1));
};
var nums1 = [4, 0, 0, 0, 0, 0],
  m = 1,
  nums2 = [1, 2, 3, 5, 6],
  n = 5;
merge(nums1, m, nums2, n);
console.log(nums1);
// @lc code=end
