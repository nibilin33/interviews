/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 发现0，所有往前移动一位,
var moveZeroes = function(nums) {
    let count = nums.length-1;
    let i = 0;
    while(i<count) {
        if(nums[i] === 0) {
            count--;
            for(let j=i;j<nums.length-1;j++) {
                let tmp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tmp;
            }
        }else{ // 如果是连续0，就不能移动i
            i++;
        }
      
    }
    return nums;
};
// @lc code=end

