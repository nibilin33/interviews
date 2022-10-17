/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 遇到非.或者*,直接比较字符是否相等，遇到.,直接往后走一位
// 遇到*，字符串的下一位是否等于前一位，或者直接结束/是继续
// 直到下一位不等的时候，p继续往下走
var isMatch = function(s, p) {
  function matchStr(i, j) {
    console.log(i, j);
    if (i == s.length && j == p.length) {
      return true;
    }
    if (i !== s.length && j == p.length) {
      return false;
    }
    if (p.charAt(j + 1) === "*") {
      if (s.charAt(i) === p.charAt(j) || p.charAt(j) == ".") {
        return (
          matchStr(i + 1, j + 2) || matchStr(i + 1, j) || matchStr(i, j + 2)
        );
      } else {
        return matchStr(i, j + 2);
      }
    }
    if (p.charAt(j) === "." || s.charAt(i) === p.charAt(j)) {
      return matchStr(i + 1, j + 1);
    }
    return false;
  }
  return matchStr(0, 0);
};
// @lc code=end
