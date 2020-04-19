/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    function pushResult(i,j,k) {
        const triple = [i,j,k].sort((a,b)=> a-b);
        result.set(triple.toString(),triple);
    }
    let result = new Map();
    let zeroCount = 0;
    nums = nums.sort((a,b)=> a-b);
    for(let i=0;i<nums.length-2;i++) {
        let left = i+1;
        let right = nums.length -1;
        if(nums[i]===0) {
            zeroCount++; 
        }
        while(left<right) {
            if(nums[left]==0&&nums[right]==0){
                break;
            }
            if(nums[left]+nums[right]+nums[i] === 0) {
                pushResult(nums[i],nums[left],nums[right]);
                left++;
            }
            if(nums[left]+nums[right]+nums[i]<0) {
                left++;
            }
            if(nums[left]+nums[right]+nums[i]>0) {
                right--;
            }
        }
    }
    let total = nums.length-1;
    for(let j=0;j<2;j++) {
        if(nums[total-j] === 0) {
            zeroCount++;
        }
    }
    if(zeroCount>=3) {
        pushResult(0,0,0);
    }
    return Array.from(result.values());
};
// @lc code=end

