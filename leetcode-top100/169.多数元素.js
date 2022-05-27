/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let visideMap = {};
    for(let i=0;i<nums.length;i++) {
        visideMap[nums[i]] = typeof visideMap[nums[i]] === 'undefined' ? 1: visideMap[nums[i]]+1;
        if(visideMap[nums[i]]>nums.length/2) {
            return nums[i];
        }
    }
};
// @lc code=end

