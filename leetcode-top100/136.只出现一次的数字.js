/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 把数组的值变成下标
var singleNumber = function(nums) {
    let d = new Map();
    for(let i=0;i<nums.length;i++) {
        if(typeof d.get(nums[i])=== 'undefined') {
            d.set(nums[i],1);
        }else{
            d.delete(nums[i]);
        }
    }
    return d.keys().next().value;
};
// @lc code=end

