/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 回溯算法的基本思想是：从一条路往前走，能进则进，
// 不能进则退回来，换一条路再试。

var letterCombinations = function(digits) {
  if (digits === null || digits.length === 0) {
    return [];
  }
  const digMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  let result = [];
  function backtrack(index, path) {
    if (path.length == digits.length) {
      result.push(path);
      return;
    }
    const list = digMap[digits.charAt(index)];
    for (let i = 0; i < list.length; i++) {
      path = path + list.charAt(i);
      if (result.includes(path)) {
        continue;
      }
      backtrack(index + 1, path);
      path = path.substring(0, index) + path.substring(index + 1, path.length);
    }
  }
  backtrack(0, "");
  return result;
};
// @lc code=end
