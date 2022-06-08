/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 记录最小下标，map记录访问元素下标，如果访问过标记
var firstUniqChar = function(s) {
    let map = {};
    for(let i=0;i<s.length;i++) {
        if(typeof map[s.charAt(i)] === 'undefined') {
            map[s.charAt(i)] = i;
        }else{
            map[s.charAt(i)] = -1;
        }
    }
    let result = Object.values(map).filter((it)=>it> -1).sort((a,b)=>a-b);
    if(result.length === 0) {
        return -1;
    }
    return result.shift();

};
// @lc code=end

