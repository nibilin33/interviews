/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    return Array.from({length: num+1 }).map((it, index)=>{
        try {
            return index.toString(2).match(/1/g).length;  
        } catch (error) {
            return 0;
        }
        
    });
};
// var input = 5;
// console.log(countBits(input));
// @lc code=end

