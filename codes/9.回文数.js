/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    let revernum = 0;
    //原始数字小于反转后的数字时，处理了一半位数的数字  
    while(x>revernum) {
        revernum = revernum * 10 + x % 10;// 获得反转后数字 
        x = Math.floor(x/10);
    }
    // 奇数长度的时候，中间就是等于自己，可以不算
    return x === revernum || x == Math.floor(revernum/10);
};
// const x = 121;
// isPalindrome(x);
// @lc code=end

