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

