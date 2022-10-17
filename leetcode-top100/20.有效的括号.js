/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) {
    return false;
  }
  let matchStack = [];
  const right = ")}]";
  for (let i = 0; i < s.length; i++) {
    if (right.indexOf(s[i]) > -1) {
      const stack = matchStack.pop();
      if (stack == "(" && s[i] == ")") {
        continue;
      }
      if (stack == "{" && s[i] == "}") {
        continue;
      }
      if (stack == "[" && s[i] == "]") {
        continue;
      }
      return false;
    }
    matchStack.push(s[i]);
  }
  return matchStack.length === 0;
};
// @lc code=end
