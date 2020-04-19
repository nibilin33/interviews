/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (!nums||nums.length == 0) {
        return [];
    }
    var result = [];
    for(var i=1;i<=nums.length;++i) {
        while(nums[i-1]!=i) {
            if(nums[i-1]>nums.length||nums[i-1]<0) {
                break;
            }
            if(nums[i-1] === nums[nums[i-1]-1]) {
                result.push(nums[i-1]);
                break;
            }
            var temp = nums[i-1];
            nums[i-1] = nums[temp-1];
            nums[temp-1] = temp;
        }
    }
    return Array.from(new Set(result));
};
// var a = [2,2];
// console.log(findDuplicates(a));
// a = [10,2,5,10,9,1,1,4,3,7];
// console.log(findDuplicates(a));
// @lc code=end

