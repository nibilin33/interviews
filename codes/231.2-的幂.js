/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 0和1按位与是0,2的幂等-1，都是1，所以n&n-1 === 0
// 比如8:1000,减一后111     
var isPowerOfTwo = function(n) {
    if(n<=0) {
        return false;
    }
    return (n&n-1) === 0;
};
// @lc code=end

