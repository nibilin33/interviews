/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 思路：和括号匹配思路很像，遇到[，就把数字解析放入，遇到]
//就把数字*字符串
var decodeString = function(s) {
  let num = [];
  let str = [];
  let result = [];
  let nummul = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(parseInt(s[i]))) {
      nummul += s[i];
    }
    if (s[i] === "[") {
      num.push(parseInt(nummul));
      nummul = "";
      str.push(s[i]);
      continue;
    }
    if (/[a-z]/i.test(s[i])) {
      str.push(s[i]);
    }
    if (s[i] === "]") {
      let times = [];
      let rep = str.pop();
      let n2 = num.pop();
      while (rep !== "[") {
        times.unshift(rep);
        rep = str.pop();
      }
      times = Array.from({ length: n2 })
        .fill(times.join(""))
        .join("");
      if (str.length == 0) {
        result.push(times);
      } else {
        str.push(times);
      }
    }
  }
  return result.join("") + str.join("");
};
// const s = "3[a]2[b4[F]c]";
// const s = "ef2[abc]3[cd]ef";
//const s = "10[leetcode]";
//const s ="3[z]2[2[y]pq4[2[jk]e1[f]]]ef";
// const exp ='zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef';
//console.log(decodeString(s));
// @lc code=end
