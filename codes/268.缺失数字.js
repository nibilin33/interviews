/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 用异或抵消，1^1^2^2^3 = 3
var missingNumber = function(nums) {
    let total = nums.length;
    for(let i=0;i<nums.length;i++) {
        total ^= i;
        total ^= nums[i];
    }
    return total;
};
// var input = [3,0,1];
// console.log(missingNumber(input));
// @lc code=end

