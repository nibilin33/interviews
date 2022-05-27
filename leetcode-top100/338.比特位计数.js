/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// new n 长度的数组，转string2进制，正则匹配的出1的个数
var countBits = function(n) {
    let arr = [];
    for(let i=0;i<n+1;i++){
        const matches = i.toString(2).match(/1/g);
        const count = matches ? matches.length:0;
        arr.push(count)
    }
    return arr;
};
// @lc code=end

