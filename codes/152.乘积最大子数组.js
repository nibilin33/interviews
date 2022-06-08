/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值
var maxProduct = function(nums) {
    let imax = -Infinity;
    let min = 1,max =1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<0) {
            let tmp = max;
            max = min;
            min = tmp;
        }
        max = Math.max(max*nums[i],nums[i]);
        min = Math.min(min*nums[i],nums[i]);
        imax = Math.max(max,imax);
    }
    return imax;
};
// @lc code=end
// [-3,-1,-1]
