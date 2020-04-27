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
// 滑动窗口
// 使用 HashSet 将字符存储在当前窗口 [i, j)[i,j)（最初 j = i）中。 
//     然后我们向右侧滑动索引 j，如果它不在 HashSet 中，我们会继续滑动 j。
//     直到 s[j] 已经存在于 HashSet 中。
//     此时，我们找到的没有重复字符的最长子字符串将会以索引 i 开头。
//     如果我们对所有的 i 这样做，就可以得到答案。
var lengthOfLongestSubstring = function(s) {
    let left=0,right = 0;
    let substr = '';
    let max = 0;
    if(s.length == 1) {
        return 1;
    }
    while(right<s.length) {
        max = max>substr.length?max:substr.length;
        if(!substr.includes(s[right])) {
            substr+=s[right];
            right++;
        }else{
            left++;
            substr = s.slice(left,right);
        }
    }
    return max > substr.length? max: substr.length;
};
var input = "auty";
var result = lengthOfLongestSubstring(input);
console.log(result);
// @lc code=end

