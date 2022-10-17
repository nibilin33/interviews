/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = "";
  let start = -1;
  let count = s.length;
  let max = 0;
  for (let i = 0; i < count; i++) {
    if (i != 0) {
      str = str.substring(1, str.length);
    }
    while (start + 1 < count && str.indexOf(s.charAt(start + 1)) < 0) {
      start++;
      str += s.charAt(start);
    }
    max = Math.max(max, str.length);
  }
  return max;
};
// @lc code=end
